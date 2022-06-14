import { createAction, props } from "@ngrx/store";
import { RegisterModel } from "@app-core/store/models/search.model";

export const storeSearch = createAction(
  "[Search] Store search",
  props<{ searchPayload: RegisterModel }>()
);
