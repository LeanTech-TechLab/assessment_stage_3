import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MovieListResponse } from "@app-models/type.model";
import { Store } from "@ngrx/store";
import { setFilters } from "@app-core/store/actions/filters.action";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnInit {
  typeForm: FormControl;
  types: MovieListResponse[];
  @Output() selectedOptionEmitter = new EventEmitter<string>();
  constructor(private store: Store) {
    this.typeForm = new FormControl("");
    this.types = [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
      {
        value: "3",
        label: "Option 3",
      },
    ];
  }

  ngOnInit(): void {
    this.typeForm.valueChanges.subscribe((result) => {
      // this.selectedOptionEmitter.emit(result);
      this.store.dispatch(setFilters({ selectedOption: result }));
    });
  }
}
