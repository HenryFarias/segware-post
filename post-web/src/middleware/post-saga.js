import {call, put, takeEvery, select} from 'redux-saga/effects';
import {flow} from '../redux/flow';
import service from '../services/post-service';
import {postActions, postSelectors, postTypes} from "../redux/post-reducer";

export default function* postSaga() {
    yield takeEvery(postTypes.LIST, list);
    yield takeEvery(postTypes.SAVE, save);
    yield takeEvery(postTypes.ADD_UPVOTE, addUpVote);
    yield takeEvery(postTypes.REMOVE_UPVOTE, removeUpVote);
    yield takeEvery(postTypes.DELETE_POST, deletePost);
}
function* list(action) {
    const page = action.payload;
    yield* flow({
        type: action.type,
        fnTry: function* () {
            const posts = yield call(service.list, page);
            yield put(postActions.updateStore({...posts, page}));
        },
    });
}
function* addUpVote(action) {
    const id = action.payload;
    yield* flow({
        type: action.type,
        fnTry: function* () {
            yield call(service.addUpVote, id);
        },
    });
}
function* removeUpVote(action) {
    const id = action.payload;
    yield* flow({
        type: action.type,
        fnTry: function* () {
            yield call(service.removeUpVote, id);
        },
    });
}
function* save(action) {
    yield* flow({
        type: action.type,
        fnTry: function* () {
            const page = yield select(postSelectors.getPage);
            yield call(service.save, action.payload);
            yield put({type: postTypes.LIST, payload: page});
        },
    });
}
function* deletePost(action) {
    const id = action.payload;
    yield* flow({
        type: action.type,
        fnTry: function* () {
            const page = yield select(postSelectors.getPage);
            yield call(service.delete, id);
            yield put({type: postTypes.LIST, payload: page});
        },
    });
}