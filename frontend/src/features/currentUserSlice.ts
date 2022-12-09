import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { User } from '@/@types/data';
import { LOGGEDIN_USER_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { RootState } from '@/common/store';
import { EmptyObject } from '@/common/types';
import axios from '@/utils/axios';

export type CurrentUser = User | EmptyObject;

type InitialState = {
  currentUser: CurrentUser;
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
    const response = await axios.get(`${ROOT_URL}/${LOGGEDIN_USER_API}`, {
      withCredentials: true,
    });

    return { data: response.data };
  }
);

// NOTE: sessions#logged_in_user(controller)
type UpdateCurrentUser = {
  logged_in: boolean;
  user: User;
};

export const updateCurrentUser = createAction<UpdateCurrentUser>(
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
