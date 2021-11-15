import axios from "axios";
import { commentsSlice } from "../utils/features/comments/commentsSlice";

const { loadingComments, commentsSuccess, commentsError } = commentsSlice.actions;

export const getComments = () => async dispatch => {
    try {
        dispatch(loadingComments());
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        dispatch(commentsSuccess(response.data));
    }
    catch (e) {
        dispatch(commentsError(e.message));
    }
 };