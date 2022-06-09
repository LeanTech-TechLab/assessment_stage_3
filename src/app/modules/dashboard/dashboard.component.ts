import { Component } from "@angular/core";
import { MoviesService } from "@app-services/movies.service";
import { MovieInterface, MovieListResponse } from "@app-models/movie.model";
import { Store } from "@ngrx/store";
import { AppState } from "@app-core/store/models/app.model";
import { storeMovieList } from "@app-core/store/actions/movie-list.action";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  totalResults: number;
  favoriteShows: MovieInterface[];
  searchingMovie = false;
  selectedColor: string;
  today: Date;
  data: any;
  constructor(
    private moviesService: MoviesService,
    private store: Store<AppState>
  ) {
    this.totalResults = 0;
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
    this.store.select("filters").subscribe((result) => {
      console.log("obteniendo datos por ngrx", result);
    });
  }

  searchMovie(movieTitle: string) {
    this.moviesService.getMovieList(movieTitle).subscribe(
      (result: MovieListResponse) => {
        if (result.error) {
          alert("too many results, write more!");
        } else {
          const { results, totalResults } = result.data;
          this.totalResults = totalResults;
          this.store.dispatch(
            storeMovieList({ movieList: results, totalResults: totalResults })
          );
        }
      },
      () => (this.searchingMovie = false)
    );
  }

  selectedMovie(selectedMovie: MovieInterface) {
    this.favoriteShows.push(selectedMovie);
  }

  removeFavorite(index: number) {
    this.favoriteShows.splice(index, 1);
  }

  hasResults() {
    return this.totalResults > 0;
  }

  selectedOption(data: string) {
    console.log("data obtenida por el abuelo", data);
  }
}
