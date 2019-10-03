import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import postReducer from "./post-reducer";
import flowReducer from "./flow";

const rootReducer = combineReducers({
    user: userReducer,
    posts: postReducer,
    flow: flowReducer
});

export default rootReducer;
