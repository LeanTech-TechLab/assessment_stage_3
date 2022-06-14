import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { storeSearch } from "@app-core/store/actions/search.action";

@Component({
  selector: "app-form-movies",
  templateUrl: "./form-movies.component.html",
  styleUrls: ["./form-movies.component.scss"],
})
export class FormMoviesComponent implements OnChanges, OnInit {
  @Input() searching: boolean;
  @Output() searchMovieEmitter = new EventEmitter<string>();
  movieForm: FormGroup;
  showType: string[];

  constructor(private fb: FormBuilder, private store: Store) {
    this.movieForm = this.fb.group({
      type: ["", Validators.required],
      name: ["", Validators.required],
      rangeYear: [{ value: "", disabled: true }],
    });
    this.searching = false;
    this.showType = ["movies", "series", "episodes"];
  }

  get getType() {
    return this.movieForm.get("type");
  }

  get getName() {
    return this.movieForm.get("name");
  }

  get getRangeYear() {
    return this.movieForm.get("rangeYear");
  }

  searchMovie() {
    const payload = Object.assign(this.movieForm.getRawValue(), {
      searchDate: new Date(),
    });
    this.store.dispatch(storeSearch({ searchPayload: payload }));
    this.searchMovieEmitter.emit(this.getName.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
    if (changes.searching) {
      this.searching = changes.searching.currentValue;
    }
  }

  ngOnInit(): void {
    this.getType.valueChanges.subscribe((result) => {
      console.log("getType", result);
      if (result === "series") {
        this.getRangeYear.enable();
        this.getRangeYear.setValidators([
          Validators.required,
          Validators.maxLength(9),
          Validators.pattern(/[^0-9]*/g),
        ]);
      } else {
        this.getRangeYear.setValue("");
        this.getRangeYear.clearValidators();
        this.getRangeYear.disable();
      }
      this.getRangeYear.updateValueAndValidity();
    });
  }
}
