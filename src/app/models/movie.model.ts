export interface MovieListResponse {
  error: boolean;
  data: {
    results: MovieInterface[];
    totalResults: string;
  };
}

export interface MovieInfoInterface {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieInterface {
  id: number;
  poster: string;
  title: string;
  type: string;
  year: string;
  favorite: boolean;
  selectedDate: Date;
  comment: string;
}
