import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieListState } from "@app-core/store/models/movie-list.model";

const movieListSelector = createFeatureSelector<MovieListState>("movieData");

export const getMovieList = createSelector(
  movieListSelector,
  (state: MovieListState) => state.movieList
);

export const getTotalResults = createSelector(
  movieListSelector,
  (state: MovieListState) => state.totalResults
);

export const getMovieById = (props: { id: number }) =>
  createSelector(movieListSelector, (state: MovieListState) => {
    return state.movieList.find((element) => element.id === props.id);
  });
