import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { posts: [], status: "idle", error: null };

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

export const addPostRequest = createAsyncThunk(
  "posts/addPostRequest",
  async (reqData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(reqData),
    });
    const data = await response.json();
    console.log("reqData", reqData);
    return data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addPostRequest.fulfilled, (state, action) => {
        state.status = "postAdded";
        state.posts.unshift(action.payload);
      });
  },
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
