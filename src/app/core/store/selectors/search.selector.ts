import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from "@app-core/store/models/search.model";

export const selectSearchSelector =
  createFeatureSelector<SearchState>("searchHistory");

export const getHistoryList = createSelector(
  selectSearchSelector,
  (state: SearchState) => state.historyList
);
