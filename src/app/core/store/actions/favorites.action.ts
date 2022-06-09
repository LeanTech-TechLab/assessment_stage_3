import { createAction, props } from "@ngrx/store";
import { MovieInterface } from "@app-models/movie.model";

export const addFavorite = createAction(
  "[Favorites] Add to favorite list",
  props<{ selectedShow: MovieInterface }>()
);

export const removeFavorite = createAction(
  "[Favorites] Remove from favorite List",
  props<{ id: number }>()
);
