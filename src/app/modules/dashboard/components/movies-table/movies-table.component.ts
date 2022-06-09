import { Component, EventEmitter, Output } from "@angular/core";
import { MovieInterface } from "@app-models/movie.model";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { AppState } from "@app-core/store/models/app.model";
import { Store } from "@ngrx/store";
import { addFavorite } from "@app-core/store/actions/favorites.action";

@Component({
  selector: "app-movies-table",
  templateUrl: "./movies-table.component.html",
  styleUrls: ["./movies-table.component.scss"],
})
export class MoviesTableComponent {
  displayedColumns: string[] = ["Title", "Type", "Year", "Action"];
  dataSource: MovieInterface[];
  movieForm: FormGroup;
  @Output() selectedOptionFatherEmitter = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.dataSource = [];
    this.movieForm = this.fb.group({
      movies: this.fb.array([]),
    });
    this.store.select("movieData").subscribe((result) => {
      this.dataSource = result.movieList;
      this.dataSource.forEach((element) => {
        this.getMovieList.push(this.addMovie(element));
      });
    });
  }

  get getMovieList() {
    return this.movieForm.get("movies") as FormArray;
  }

  addMovie(movieData: MovieInterface) {
    return this.fb.group({
      id: [movieData.id],
      poster: [movieData.poster],
      title: [movieData.title],
      type: [movieData.type],
      year: [movieData.year],
      comment: [""],
    });
  }

  addToFavorite(index: number) {
    const payload = Object.assign(this.getMovieList.at(index).value, {
      selectedDate: new Date(),
      favorite: true,
    });
    this.store.dispatch(addFavorite({ selectedShow: payload }));
  }

  selectedOption(data: string) {
    this.selectedOptionFatherEmitter.emit(data);
  }
}
