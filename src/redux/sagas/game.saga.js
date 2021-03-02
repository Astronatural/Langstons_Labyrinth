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
function* gameBoardSaga(action) {
    try {
        console.log('in fetch game saga', action.payload);
        const game = yield axios.get(`/api/game/${action.payload}`); // , action.payload
        yield put({ type: 'SET_GAMEBOARD', payload: game.data }); // ??
    } catch (error) {
        console.log('game get request failed', error);
    }
}

// updates the movement of the gameboard.  // no idea if this is right, gettin too tired.
function* updateGameSaga(action) {
    try{
        console.log('in updater', (action.payload[1]).game_id);  //  looks good

        const game = yield axios.put(`/api/game/${(action.payload[1]).game_id}`, {payload: action.payload});  // <-- problem here {payload: action.payload.categoryId}
        yield put({ type: 'UPDATE_GAMEBOARD', payload: game.data }); 
    } catch (error) {
        console.log("game update failed", error);
    }
}

/*
function* setCategorySaga(action) {
    try {
        yield axios.put(`api/favorite/category/${action.payload.gifId}`, {payload: action.payload.categoryId})
        yield put({ type: 'FETCH_FAVORITES' });
    } catch (error) {
        console.log('Error in add', error);
    };
};
*/

function* addGameSaga() {
    yield takeLatest('MAKE_GAME', gameSaga), // makes new game
        yield takeEvery('FETCH_GAMES', fetchGameSaga),
        yield takeEvery('DELETE_GAME', deleteGameSaga),
        yield takeLatest('FETCH_GAME', gameBoardSaga), // gets the game_tiles
        yield takeEvery('MOVE_MAZE', updateGameSaga) 
}

export default addGameSaga;
