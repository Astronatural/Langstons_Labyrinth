import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* gameSaga(action) {
    try {
        yield axios.post('api/game', action.payload);
    } catch (error) {
        console.log('Error with user registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });  // don't have an error listed for this yet though.
    }
}

function* addGameSaga() {
    yield takeLatest('MAKE_GAME', gameSaga);
}

export default addGameSaga;