// NOTE: ディレクトリ構成検討中
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getCurrentUser from '@/services/users/getCurrentUser';

import { InitialState, UpdateCurrentUser, UpdateLoginStatus } from './type';

const initialState: InitialState = {
  currentUser: {
    id: NaN,
    name: '',
    email: '',
    password_digest: '',
    created_at: '',
    updated_at: '',
    remember_digest: null,
    reset_digest: null,
    reset_sent_at: null,
    activation_digest: null,
    activated: null,
    activated_at: null,
    admin: false,
    image_url: null,
  },
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
    const data = await getCurrentUser();

    return { user: data.user, loggedIn: data.logged_in };
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
      if (payload.user && payload.loggedIn) {
        state.loggedIn = true;
        state.currentUser = payload.user;
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
      state.currentUser = { ...initialState.currentUser };
      state.loggedIn = false;
    });
  },
});

export default currentUserSlice.reducer;
