import {all} from 'redux-saga/effects';
import userSaga from './user-saga';
import postSaga from "./post-saga";

export default function* watchMany() {
    yield all([
        userSaga(),
        postSaga()
    ]);
};