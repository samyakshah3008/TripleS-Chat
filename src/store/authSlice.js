import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  token: null,
};

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
});

export default authSlice.reducer;

export const { authInfo, getToken } = authSlice.actions;
