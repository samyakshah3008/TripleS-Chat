import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  bookmarkService,
  deleteCommentsServices,
  deletePostServices,
  dislikedPostService,
  editCommentsServices,
  editPostService,
  getPosts,
  likedPostService,
  postCommentsService,
  removeBookmarkService,
} from "../services/postServices";

import axios from "axios";

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

export const postComments = createAsyncThunk(
  `/posts/postComments`,
  async ({ postId, commentData, token }) => {
    try {
      const response = await postCommentsService(postId, commentData, token);
      return response.data.posts;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteComments = createAsyncThunk(
  "posts/deleteComments",
  async (item) => {
    try {
      const response = await deleteCommentsServices(
        item.postId,
        item.commentId,
        item.token
      );

      return response.data.posts;
    } catch (error) {
      console.error(error);
    }
  }
);

export const editComments = createAsyncThunk(
  "posts/editComments",
  async ({ postId, commentId, commentData, token }) => {
    try {
      const response = await editCommentsServices(
        postId,
        commentId,
        commentData,
        token
      );
      console.log(response);
      return response.data.posts;
    } catch (error) {
      console.error(error);
    }
  }
);

export const createNewPost = createAsyncThunk(
  "posts/createPost",
  async ({ content, token }) => {
    try {
      const response = await axios.post(
        "/api/posts",
        { postData: { content: content, token: token } },
        { headers: { authorization: token } }
      );
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "/posts/deletePosts",
  async ({ postId, token }) => {
    try {
      const response = await deletePostServices(postId, token);
      return response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "/posts/editPosts",
  async ({ id, content, token }) => {
    try {
      const response = await editPostService(id, content, token);
      console.log(response);
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
    [deletePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [editPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
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
    [postComments.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [deleteComments.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [createNewPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [editComments.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;
