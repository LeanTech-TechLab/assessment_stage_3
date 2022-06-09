import { MovieInterface } from "@app-models/movie.model";

export interface MovieListState {
  movieList: MovieInterface[];
  totalResults: number;
  favorite: boolean;
}
