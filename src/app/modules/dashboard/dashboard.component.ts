import { Component } from "@angular/core";
import { MoviesService } from "@app-services/movies.service";
import { MovieInterface, MovieListResponse } from "@app-models/movie.model";
import { Store } from "@ngrx/store";
import { AppState } from "@app-core/store/models/app.model";
import { storeMovieList } from "@app-core/store/actions/movie-list.action";
import { IDeactivateComponent } from "@app-models/deactivateComponent.model";
import { getFavoriteList } from "@app-core/store/selectors/favorites.selector";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements IDeactivateComponent {
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
    this.store.select(getFavoriteList).subscribe((result: MovieInterface[]) => {
      this.favoriteShows = result;
      console.log("this.favoriteShows", this.favoriteShows);
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

  hasFavoriteShow() {
    return this.favoriteShows.length > 0;
  }

  selectedOption(data: string) {
    console.log("data obtenida por el abuelo", data);
  }

  public canExit(): boolean {
    if (!this.hasFavoriteShow()) {
      alert(
        "No tienes show favoritos agregados, no se puede salir de la página."
      );
      return false;
    }
    return true;
  }
}
