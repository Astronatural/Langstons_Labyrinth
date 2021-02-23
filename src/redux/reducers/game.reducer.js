const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case 'MAKE_GAME':
            return action.payload;
        case 'FETCH_GAME':
            return action.payload.id;
        case 'FETCH_GAMES':
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default gameReducer;
