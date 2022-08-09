import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  followUserService,
  unfollowUserService,
} from "../services/userServices";

const initialState = {
  userInfo: null,
  token: null,
};

export const followUser = createAsyncThunk(
  "users/getFollow",
  async ({ followUserId, token }) => {
    try {
      const response = await followUserService(followUserId, token);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "users/unFollow",
  async ({ followUserId, token }) => {
    try {
      const response = await unfollowUserService(followUserId, token);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    getToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [followUser.fulfilled]: (state, { payload }) => {
      state.userInfo = payload.user;
    },
    [followUser.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.userInfo = payload.user;
    },
  },
});

export default authSlice.reducer;

export const { authInfo, getToken } = authSlice.actions;
