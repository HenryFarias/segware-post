import {call, put, takeEvery} from 'redux-saga/effects';

import {flow} from '../redux/flow';
import {userActions, userTypes} from '../redux/user-reducer';
import userService from '../services/user-service';

export default function* loginSaga() {
    yield takeEvery(userTypes.LOGIN, login);
}

function* login(action) {
    yield* flow({
        type: action.type,

        fnTry: function* () {
            const token = yield call(userService.login, action.payload);
            yield put(userActions.updateToken(token));
        },
    });
}