import { Component, EventEmitter, Output } from "@angular/core";
import { MovieInterface } from "@app-models/movie.model";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { AppState } from "@app-core/store/models/app.model";
import { Store } from "@ngrx/store";
import { addFavorite } from "@app-core/store/actions/favorites.action";
import {
  getMovieById,
  getMovieList,
  getTotalResults,
} from "@app-core/store/selectors/movie-list.selector";

@Component({
  selector: "app-movies-table",
  templateUrl: "./movies-table.component.html",
  styleUrls: ["./movies-table.component.scss"],
})
export class MoviesTableComponent {
  displayedColumns: string[] = ["Title", "Type", "Year", "Action"];
  dataSource: MovieInterface[];
  movieForm: FormGroup;
  selectedNumber: number;
  @Output() selectedOptionFatherEmitter = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.selectedNumber = 0;
    this.dataSource = [];
    this.movieForm = this.fb.group({
      movies: this.fb.array([]),
    });
    this.store.select(getMovieList).subscribe((result: MovieInterface[]) => {
      this.dataSource = result;
      this.getMovieList.clear();
      this.dataSource.forEach((element) => {
        this.getMovieList.push(this.addMovie(element));
      });
    });

    this.store.select(getTotalResults).subscribe((result: number) => {
      console.log("totalResult", result);
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

  setValue() {
    this.selectedNumber = Math.floor(Math.random() * 9);
    this.store
      .select(getMovieById({ id: this.selectedNumber }))
      // eslint-disable-next-line ngrx/no-store-subscription
      .subscribe((result: MovieInterface) => {
        console.log("getMovieById", result);
      });
  }
}
