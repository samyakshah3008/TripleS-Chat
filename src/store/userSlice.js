import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { followUserService } from "../services/userServices";

const initialState = {
  users: [],
  error: "",
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

const createUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAny: (state, action) => {
      state.users = action.payload?.users;
    },
  },

  extraReducers: {
    [followUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.username === payload.followUser.username) {
          return payload.followUser;
        }
        if (user.username === payload.user.username) {
          return payload.user;
        }
        return user;
      });
    },
    [followUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default createUserSlice.reducer;

export const { getAny } = createUserSlice.actions;
