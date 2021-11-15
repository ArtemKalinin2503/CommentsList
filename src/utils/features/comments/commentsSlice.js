import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'commentsReducer',
  initialState: {
    isLoading: false,
    comments: [],
    error: ''
  },
  reducers: {
    loadingComments: (state) => {
        state.isLoading = true;
    },
    commentsSuccess: (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.comments = action.payload;
    },
    commentsError: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
  }
});

export default commentsSlice.reducer;
export const { loadingComments, commentsSuccess, commentsError } = commentsSlice.actions;
