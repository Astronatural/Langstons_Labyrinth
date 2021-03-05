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

// Delete a game from game DB and from game_tiles DB.
function* deleteGameSaga(action) {
    try {
        yield axios.delete(`/api/game/${action.payload}`);
        yield put({ type: 'FETCH_GAMES' });        
    } catch {
        console.log('delete error id:', action.payload);

    }
}
// saga for geting a game to the gameboard.
function* gameBoardSaga(action) {
    try {
        const game = yield axios.get(`/api/game/${action.payload}`); 
        yield put({ type: 'SET_GAMEBOARD', payload: game.data }); 
        yield put({ type: 'GAME_INFO', payload: action.payload})  // <-- is this redundant or neccessary?
    } catch (error) {
        console.log('game get request failed', error);
    }
}

// updates the movement of the gameboard.
function* updateGameSaga(action) {
    try {
        console.log('in updater', (action.payload[1]).game_id);  //  looks good
        const gameId = (action.payload[1]).game_id;
        yield axios.put(`/api/game/${gameId}`, { payload: action.payload });
        // yield put({ type: 'UPDATE_GAMEBOARD', payload: action.payload  }); // tried payload: game.data
    } catch (error) {
        console.log("game update failed", error);
    }
}

function* infoSaga(action) {
    try {
        console.log('in game info saga', action.payload);  // game.id
        const game = yield axios.get(`/api/info/${action.payload}`); // , action.payload
        yield put({ type: 'SET_INFO', payload: game.data });
        console.log('info', game.data); // now is just 1, wtf!!!!! and now it is back, wTFWTF!
    } catch (error) {
        console.log('game info request failed', error);
    }
}

function* addTurnSaga(action) {
    try {
        console.log('in add turn saga', action.payload);  // game.id
        yield axios.put(`/api/info/${action.payload}`);  //  want to see if it works without reducer, const turn = yield 
        yield put({ type: 'GAME_INFO', payload: action.payload });
    } catch (error) {
        console.log('add turn request failed', error);
    }
}


function* addGameSaga() {
    yield takeLatest('MAKE_GAME', gameSaga), // makes new game
        yield takeEvery('FETCH_GAMES', fetchGameSaga),
        yield takeEvery('DELETE_GAME', deleteGameSaga),
        yield takeLatest('FETCH_GAME', gameBoardSaga), // gets the game_tiles
        yield takeEvery('MOVE_MAZE', updateGameSaga)
    yield takeLatest('GAME_INFO', infoSaga), // gets the game DB info 
        yield takeLatest('ADD_TURN', addTurnSaga)
}

export default addGameSaga;
