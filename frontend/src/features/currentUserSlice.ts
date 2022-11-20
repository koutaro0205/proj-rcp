import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOGIN_USER_PATH } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { RootState } from '@/common/store';
import axios from '@/utils/axios';

type InitialState = {
  currentUser: { [key: string]: any };
  loggedIn: boolean;
};

const initialState: InitialState = {
  currentUser: {},
  loggedIn: false,
};

const ACTION_TYPE = {
  CURRENT_USER: 'currentUser/fetchCurrentUser',
  UPDATE_CURRENT_USER: 'currentUser/updateCurrentUser',
  DELETE_CURRENT_USER: 'currentUser/deleteCurrentUser',
};

export const fetchCurrentUser = createAsyncThunk(
  ACTION_TYPE.CURRENT_USER,
  async () => {
    const response = await axios.get(`${ROOT_URL}/${LOGIN_USER_PATH}`, {
      withCredentials: true,
    });

    return { data: response.data };
  }
);

// NOTE: 値が不明なためany型で対応
export const updateCurrentUser = createAction<any>(
  ACTION_TYPE.UPDATE_CURRENT_USER
);

export const deleteCurrentUser = createAction(ACTION_TYPE.DELETE_CURRENT_USER);

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
      if (payload.data) {
        state.loggedIn = payload.data.logged_in && true;
        state.currentUser = payload.data.user;
      }
    });
    builder.addCase(updateCurrentUser, (state, { payload }) => {
      if (payload.logged_in) {
        state.currentUser = payload.user;
        state.loggedIn = payload.logged_in;
      }
    });
    builder.addCase(deleteCurrentUser, (state) => {
      state.currentUser = {};
      state.loggedIn = false;
    });
  },
});

export const selectCurrentUser = (state: RootState) =>
  state.currentUser.currentUser;
export const selectLoggedInStatus = (state: RootState) =>
  state.currentUser.loggedIn;

export default currentUserSlice.reducer;