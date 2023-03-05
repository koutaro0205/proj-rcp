import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import currentUserSlice from '@/features/currentUser/slice';
import postRecipeSlice from '@/features/postRecipe/slice';

const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    postRecipe: postRecipeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export default store;
