import { MovieListState } from "@app-core/store/models/movie-list.model";
import { FavoritesState } from "@app-core/store/models/favorites.model";
import { SearchState } from "@app-core/store/models/search.model";

export interface AppState {
  filters: FiltersState;
  movieData: MovieListState;
  favorites: FavoritesState;
  searchHistory: SearchState;
}

export interface FiltersState {
  value: string;
  label: number;
  selectedValue: boolean;
}
