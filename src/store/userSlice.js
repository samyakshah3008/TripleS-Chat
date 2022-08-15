import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { followUserService } from "../services/userServices";
import axios from "axios";

const initialState = {
  users: [],
  error: "",
};

export const editProfile = createAsyncThunk(
  "users/editProfile",
  async ({ bio, website, token }) => {
    try {
      const response = await axios.post(
        "/api/users/edit",
        { userData: { bio: bio, website: website } },
        { headers: { authorization: token } }
      );
      return response.data.user;
    } catch (error) {
      console.error(error.response);
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
    [editProfile.fulfilled]: (state, action) => {
      state.users = state.users.map((eachUser) =>
        eachUser.username === action.payload.username
          ? action.payload
          : eachUser
      );
    },
  },
});

export default createUserSlice.reducer;

export const { getAny } = createUserSlice.actions;
