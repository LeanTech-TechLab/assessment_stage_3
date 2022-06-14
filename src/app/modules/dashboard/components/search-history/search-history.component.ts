import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getHistoryList } from "@app-core/store/selectors/search.selector";
import { RegisterModel } from "@app-core/store/models/search.model";

@Component({
  selector: "app-search-history",
  templateUrl: "./search-history.component.html",
  styleUrls: ["./search-history.component.scss"],
})
export class SearchHistoryComponent {
  historyList: RegisterModel[];
  constructor(private store: Store) {
    this.store.select(getHistoryList).subscribe((result) => {
      this.historyList = result;
    });
  }
}
