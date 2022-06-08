import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "@app-core/store/models/app.model";
import { filterReducer } from "@app-core/store/reducers/filters.reducer";

export const reducers: ActionReducerMap<AppState> = {
  filters: filterReducer,
};
