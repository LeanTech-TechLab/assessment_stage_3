import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { MovieInterface } from "@app-models/movie.model";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-movies-table",
  templateUrl: "./movies-table.component.html",
  styleUrls: ["./movies-table.component.scss"],
})
export class MoviesTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ["Title", "Type", "Year", "Action"];
  dataSource: MovieInterface[];
  movieForm: FormGroup;
  @Input() movieList: MovieInterface[];
  @Output() selectMovieEmitter = new EventEmitter<MovieInterface>();
  constructor(private fb: FormBuilder) {
    this.dataSource = [];
    this.movieList = [];
    this.movieForm = this.fb.group({
      movies: this.fb.array([]),
    });
  }

  get getMovieList() {
    return this.movieForm.get("movies") as FormArray;
  }

  ngOnInit(): void {
    this.dataSource = this.movieList;
  }

  addMovie(movieData: MovieInterface) {
    return this.fb.group({
      id: [movieData.id],
      poster: [movieData.poster],
      title: [movieData.title],
      type: [movieData.type],
      year: [movieData.year],
      comment: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movieList) {
      this.dataSource = changes.movieList.currentValue;
      this.dataSource.forEach((element) => {
        this.getMovieList.push(this.addMovie(element));
      });
    }
  }

  addToFavorite(index: number) {
    const payload = Object.assign(this.getMovieList.at(index).value, {selectedDate: new Date(), favorite: true});
    this.selectMovieEmitter.emit(payload);
  }
}
