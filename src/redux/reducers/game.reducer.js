const gameReducer = (state = [], action) => {   //  tried; {} = game.map is not a function. [], [{}] = game undefined.
    switch (action.type) {
        case 'MAKE_GAME':
            return action.payload;
        case 'SET_GAMES':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default gameReducer;


//         case 'FETCH_GAME':
// return action.payload.id;
