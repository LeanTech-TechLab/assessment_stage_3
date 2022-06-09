import { Component } from "@angular/core";
import { MovieInterface } from "@app-models/movie.model";
import { Store } from "@ngrx/store";
import { AppState } from "@app-core/store/models/app.model";
import { removeFavorite } from "@app-core/store/actions/favorites.action";

@Component({
  selector: "app-favorite-shows",
  templateUrl: "./favorite-shows.component.html",
  styleUrls: ["./favorite-shows.component.scss"],
})
export class FavoriteShowsComponent {
  displayedColumns: string[] = [
    "title",
    "type",
    "year",
    "selectedDate",
    "comment",
  ];
  favorites: MovieInterface[];
  constructor(private store: Store<AppState>) {
    this.store.select("favorites").subscribe((result) => {
      this.favorites = result.favoriteList;
    });
  }

  removeFavorite(id: number) {
    this.store.dispatch(removeFavorite({ id }));
  }
}
