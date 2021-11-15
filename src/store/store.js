import { configureStore } from "@reduxjs/toolkit";

import commentsReducer from "../utils/features/comments/commentsSlice";

export default configureStore({
  reducer: {
    commentsReducer: commentsReducer
  }
});
