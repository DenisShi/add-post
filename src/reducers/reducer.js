import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postsSlice from "./postsSlice";

const rootReducer = combineReducers({
  posts: postsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
