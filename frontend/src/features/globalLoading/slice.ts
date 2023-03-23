// NOTE: ディレクトリ構成検討中
import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const ACTION_TYPE = {
  LOADING: 'globalLoading/setIsLoadingStatus',
};

export const setIsLoading = createAction<boolean>(ACTION_TYPE.LOADING);

export const globalLoadingSlice = createSlice({
  name: 'globalLoading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setIsLoading, (state, { payload }) => {
      state.isLoading = payload;
    });
  },
});

export default globalLoadingSlice.reducer;
