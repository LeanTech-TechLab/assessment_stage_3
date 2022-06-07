import { Component } from "@angular/core";
import { MoviesService } from "@app-services/movies.service";
import { MovieInterface, MovieListResponse } from "@app-models/movie.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  movieList: MovieInterface[];
  favoriteShows: MovieInterface[];
  searchingMovie = false;
  selectedColor: string;
  today: Date;
  data: any;
  constructor(private moviesService: MoviesService) {
    this.movieList = [];
    this.favoriteShows = [];
    this.selectedColor = "orange";
    this.today = new Date();
    this.data = [
      {
        title: "Game of thrones",
        type: "Serie",
      },
      {
        title: "Dr Strange",
        type: "Movie",
      },
    ];
  }

  searchMovie(movieTitle: string) {
    // this.searchingMovie = true;
    this.moviesService.getMovieList(movieTitle).subscribe(
      (result: MovieListResponse) => {
        console.log("result", result);
        if (result.error) {
          this.movieList = result.data.results;
        } else {
          alert("too many results, write more!");
        }
        // this.searchingMovie = false;
      },
      () => (this.searchingMovie = false)
    );
  }

  selectedMovie(selectedMovie: MovieInterface) {
    console.log('selectedMovie', selectedMovie);
    this.favoriteShows.push(selectedMovie);
    console.log('this.favoriteShows', this.favoriteShows);
  }

  removeFavorite(index: number) {
    this.favoriteShows.splice(index, 1);
  }

  hasResults() {
    return this.movieList.length > 0;
  }

  hasFavoriteShow() {
    return this.favoriteShows.length > 0;
  }
}
