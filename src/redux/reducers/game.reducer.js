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
// do you want a comment?
export default gameReducer;
