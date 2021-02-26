const gameReducer = (state = [data: {}], action) => {
    switch (action.type) {
        case 'MAKE_GAME':
            return action.payload;
        case 'FETCH_GAME':
            return action.payload.id;
        case 'FETCH_GAMES':
            return action.payload;
        case 'SET_GAMES':
            return action.payload;
        default:
            return state;
    }
};

export default gameReducer;
