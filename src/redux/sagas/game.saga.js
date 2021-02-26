import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// saga for posting new games
function* gameSaga(action) {
    try {
        yield axios.post('api/game', action.payload);
    } catch (error) {
        console.log('Error with user registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });  // don't have an error listed for this yet though.
    }
}

// saga for geting game list to the GM screen, should only send games related to user.id.
function* fetchGameSaga(action) {
    try {
        const game = yield axios.get('/api/game', action.payload);
        yield put({ type: 'SET_GAMES', payload: game.data });
    } catch (error) {
        console.log('game get request failed', error);
    }
}

function* addGameSaga() {
    yield takeLatest('MAKE_GAME', gameSaga);
    yield takeEvery('FETCH_GAMES', fetchGameSaga)
}

export default addGameSaga;
