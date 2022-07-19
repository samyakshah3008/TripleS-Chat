import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPosts } from "../services/postServices";

export const getAllPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const {
      data: { posts },
      status,
    } = await getPosts();

    if (status === 200) {
      return posts;
    }
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  posts: [],
  bookmarks: [],
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },

    [getAllPosts.rejected]: (state) => {
      state.error = "Error occured! Try again later";
    },
  },
});

export default postSlice.reducer;
