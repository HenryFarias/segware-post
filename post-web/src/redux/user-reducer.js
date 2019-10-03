import {createAction, handleActions} from 'redux-actions';
import {getSessionStorage, setSessionStorage} from "../helpers/storage-helper";

// ACTION TYPES
const LOGIN = `/USER/LOGIN`;
const UPDATE_TOKEN = `/USER/UPDATE_TOKEN`;

export const userTypes = {
    LOGIN,
    UPDATE_TOKEN,
};

// ACTIONS
const login = createAction(LOGIN);
const updateToken = createAction(UPDATE_TOKEN);

export const userActions = {
    login,
    updateToken,
};

// INITIAL STATE
const initialState = {...getSessionStorage("user")};

// REDUCERS
const userReducer = handleActions({
    [UPDATE_TOKEN]: (state, action) => {
        const user = action.payload;
        setSessionStorage("user", user);
        return {...user};
    }
}, initialState);

export default userReducer;

const getUser = state => state.user;

export const userSelectors = {
    getUser
};