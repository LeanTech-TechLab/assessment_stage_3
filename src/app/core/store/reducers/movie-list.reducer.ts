import { MovieListState } from "@app-core/store/models/movie-list.model";
import { Action, createReducer, on } from "@ngrx/store";
import { storeMovieList } from "@app-core/store/actions/movie-list.action";

const initialState: MovieListState = {
  movieList: [],
  totalResults: 0,
  favorite: false,
};

const _movieListReducer = createReducer(
  initialState,
  on(storeMovieList, (state, { movieList, totalResults }) => ({
    ...state,
    movieList: movieList,
    totalResults: totalResults,
    favorite: true,
  }))
);

export function movieListReducer(state: MovieListState, action: Action) {
  return _movieListReducer(state, action);
}
