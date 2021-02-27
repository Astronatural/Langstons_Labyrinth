import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


// saga for posting new games
function* gameSaga(action) {
    try {
        yield axios.post('/api/game', action.payload);
    } catch (error) {
        console.log('Error with user registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });  // don't have an error listed for this yet though.
    }
}

// saga for geting game list to the GM screen, should only send games related to user.id.
function* fetchGameSaga() {
    try {
        console.log('in fetch games saga');
        const game = yield axios.get('/api/game'); // , action.payload
        console.log(game.data);
        yield put({ type: 'SET_GAMES', payload: game.data });
    } catch (error) {
        console.log('game get request failed', error);
    }
}


function* deleteGameSaga(action) {
    try {
        yield axios.delete(`/api/game/${action.payload}`);
       yield put({ type: 'FETCH_GAMES' });  // right, I want to reset the game list?        
    } catch {
        console.log('delete error id:', action.payload);

    }
}

// saga for geting a game to the gameboard.
function* gameBoardSaga() {
    try {
        //console.log('in fetch game saga', action.payload);
        const game = yield axios.get(`/api/game${action.payload}`); // , action.payload
        yield put({ type: 'SET_GAMEBOARD', payload: game.data });
    } catch (error) {
        console.log('game get request failed', error);
    }
}


function* addGameSaga() {
    yield takeLatest('MAKE_GAME', gameSaga),
        yield takeEvery('FETCH_GAMES', fetchGameSaga),
        yield takeEvery('DELETE_GAME', deleteGameSaga),
        yield takeLatest('FETCH_GAME', gameBoardSaga)
}

export default addGameSaga;
