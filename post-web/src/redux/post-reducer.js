import {createAction, handleActions} from 'redux-actions';
import {setSessionStorage} from "../helpers/storage-helper";

// ACTION TYPES
const SAVE = `/POST/SAVE`;
const DELETE_POST = `/POST/DELETE_POST`;
const LIST = `/POST/LIST`;
const UPDATE_STORE = `/POST/UPDATE_STORE`;
const ADD_UPVOTE = `/POST/ADD_UPVOTE`;
const REMOVE_UPVOTE = `/POST/REMOVE_UPVOTE`;

export const postTypes = {
    SAVE,
    DELETE_POST,
    LIST,
    UPDATE_STORE,
    ADD_UPVOTE,
    REMOVE_UPVOTE
};

// ACTIONS
const save = createAction(SAVE);
const deletePost = createAction(DELETE_POST);
const list = createAction(LIST);
const updateStore = createAction(UPDATE_STORE);
const addUpvote = createAction(ADD_UPVOTE);
const removeUpvote = createAction(REMOVE_UPVOTE);

export const postActions = {
    save,
    list,
    updateStore,
    addUpvote,
    removeUpvote,
    deletePost
};

// INITIAL STATE
const initialState = {};

// REDUCERS
const postReducer = handleActions({
    [UPDATE_STORE]: (state, action) => {
        return action.payload;
    }
}, initialState);

export default postReducer;

const getPosts = state => state.posts.content;
const getHasMore = state => !state.posts.last;
const getPage = state => state.posts.page;

export const postSelectors = {
    getPosts,
    getHasMore,
    getPage
};