import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoritesState } from "@app-core/store/models/favorites.model";

const favoriteSelector = createFeatureSelector<FavoritesState>("favorites");

export const getFavoriteList = createSelector(
  favoriteSelector,
  (state: FavoritesState) => state.favoriteList
);
