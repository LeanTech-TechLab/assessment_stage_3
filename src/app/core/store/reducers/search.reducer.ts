import { SearchState } from "@app-core/store/models/search.model";
import { Action, createReducer, on } from "@ngrx/store";
import { storeSearch } from "@app-core/store/actions/search.action";

const initialState: SearchState = {
  historyList: [],
};

const _searchReducer = createReducer(
  initialState,
  on(storeSearch, (state, { searchPayload }) => {
    const historyList = [...state.historyList];
    historyList.push(searchPayload);
    return { ...state, historyList };
  })
);

export function searchReducer(state: SearchState, action: Action) {
  return _searchReducer(state, action);
}
