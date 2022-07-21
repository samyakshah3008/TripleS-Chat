import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  bookmarkService,
  dislikedPostService,
  getPosts,
  likedPostService,
  removeBookmarkService,
} from "../services/postServices";

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

export const bookmarkPosts = createAsyncThunk(
  "posts/bookmarkPosts",
  async ({ postId, token }) => {
    try {
      const response = await bookmarkService(postId, token);
      console.log(response);
      return response.data.bookmarks;
    } catch (error) {
      console.error(error);
    }
  }
);

export const removeBookmarkPosts = createAsyncThunk(
  "posts/removeBookmarkPosts",
  async ({ postId, token }) => {
    try {
      const response = await removeBookmarkService(postId, token);
      return response.data.bookmarks;
    } catch (error) {
      console.error(error);
    }
  }
);

export const likePosts = createAsyncThunk(
  "posts/likePosts",
  async ({ postId, token }) => {
    try {
      const response = await likedPostService(postId, token);
      console.log(response, "from like");
      return response.data.posts;
    } catch (error) {
      console.log("from like error");
      console.error(error);
    }
  }
);

export const dislikePosts = createAsyncThunk(
  "posts/dislikePosts",
  async ({ postId, token }) => {
    try {
      const response = await dislikedPostService(postId, token);
      return response.data.posts;
    } catch (error) {
      console.error(error);
    }
  }
);

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
    [bookmarkPosts.fulfilled]: (state, action) => {
      state.bookmarks = action.payload;
    },
    [removeBookmarkPosts.fulfilled]: (state, action) => {
      state.bookmarks = action.payload;
    },
    [likePosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [dislikePosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;
