import { createAction, props } from "@ngrx/store";

export const setFilters = createAction(
  "[Filters] Set filter",
  props<{ selectedOption: string }>()
);
