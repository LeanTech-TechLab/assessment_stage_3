import { FavoritesState } from "@app-core/store/models/favorites.model";
import { Action, createReducer, on } from "@ngrx/store";
import {
  addFavorite,
  removeFavorite,
} from "@app-core/store/actions/favorites.action";

const initialState: FavoritesState = {
  favoriteList: [],
};

const _favoriteReducer = createReducer(
  initialState,
  on(addFavorite, (state, { selectedShow }) => {
    const favoriteList = [...state.favoriteList];
    favoriteList.push(selectedShow);
    return { ...state, favoriteList };
  }),
  on(removeFavorite, (state, { id }) => {
    const favoriteList = [...state.favoriteList];
    const index = favoriteList.findIndex((element) => element.id === id);
    favoriteList.splice(index, 1);
    return { ...state, favoriteList };
  })
);

export function favoriteReducer(state: FavoritesState, action: Action) {
  return _favoriteReducer(state, action);
}
