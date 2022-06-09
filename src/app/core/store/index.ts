import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "@app-core/store/models/app.model";
import { filterReducer } from "@app-core/store/reducers/filters.reducer";
import { movieListReducer } from "@app-core/store/reducers/movie-list.reducer";
import { favoriteReducer } from "@app-core/store/reducers/favorites.reducer";

export const reducers: ActionReducerMap<AppState> = {
  filters: filterReducer,
  movieData: movieListReducer,
  favorites: favoriteReducer,
};
