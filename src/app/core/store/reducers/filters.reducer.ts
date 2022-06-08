import { FiltersState } from "@app-core/store/models/app.model";
import { Action, createReducer, on } from "@ngrx/store";
import { setFilters } from "@app-core/store/actions/filters.action";

const initialState: FiltersState = {
  value: "",
  label: 0,
  selectedValue: false,
};

const _filtersReducers = createReducer(
  initialState,
  on(setFilters, (state, { selectedOption }) => ({
    ...state,
    value: selectedOption,
  }))
);

export function filterReducer(state: FiltersState, action: Action) {
  return _filtersReducers(state, action);
}
