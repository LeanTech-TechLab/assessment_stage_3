import { createAction, props } from "@ngrx/store";
import { MovieInterface } from "@app-models/movie.model";

export const storeMovieList = createAction(
  "[Movie List] Store movie list",
  props<{ movieList: MovieInterface[]; totalResults: number }>()
);
