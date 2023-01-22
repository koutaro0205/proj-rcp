// NOTE: ディレクトリ構成検討中
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOGGEDIN_USER_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import axios from '@/utils/axios';

import { InitialState, UpdateCurrentUser, UpdateLoginStatus } from './type';

const initialState: InitialState = {
  currentUser: {},
  loggedIn: false,
};

const ACTION_TYPE = {
  CURRENT_USER: 'currentUser/fetchCurrentUser',
  UPDATE_LOGIN_STATUS: 'currentUser/updateLoginStatus',
  UPDATE_CURRENT_USER: 'currentUser/updateCurrentUser',
  DELETE_CURRENT_USER: 'currentUser/deleteCurrentUser',
};

export const fetchCurrentUser = createAsyncThunk(
  ACTION_TYPE.CURRENT_USER,
  async () => {
    // FIXME: servises/に切り出す
    const response = await axios.get(`${ROOT_URL}/${LOGGEDIN_USER_API}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
    axios.defaults.headers.common['X-CSRF-Token'] =
      response.headers['X-CSRF-Token'];

    return { data: response.data };
  }
);

export const updateLoginStatus = createAction<UpdateLoginStatus>(
  ACTION_TYPE.UPDATE_LOGIN_STATUS
);

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
    builder.addCase(updateLoginStatus, (state, { payload }) => {
      if (payload.logged_in) {
        state.currentUser = payload.user;
        state.loggedIn = payload.logged_in;
      }
    });
    builder.addCase(updateCurrentUser, (state, { payload }) => {
      if (payload) {
        state.currentUser = payload.user;
      }
    });
    builder.addCase(deleteCurrentUser, (state) => {
      state.currentUser = {};
      state.loggedIn = false;
    });
  },
});

export default currentUserSlice.reducer;
