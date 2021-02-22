Turn home page into splash_screen

Keep Login and Register, restyle (next week)

Turn user page into GM screen page.

Add gameboard and link it in.


Server stuff:
    GET a new game.  (really isnt' a POST, until I set tile#)
    GET an old game.
    DELETE a no-longer needed game.
    PUT, turn information, should be updated by turn phase.
        The "Save" button on the bottom of gameboard will remake this request and send user to home/splash.

    
    Routes:
        app.use('/api/user', userRouter);  // for user stuffs, leave alone.
        app.use('/api/game', gameRouter);  // for game stuff, work it out.


Distpatches:
    FETCH_GAME  //  to call the GET for an old game.
    MAKE_GAME  //  to GET a new game.
    DELETE  //   obviously.
    MOVE_PC  //  update the Party token
    MOVE_BOSS  //  update the Boss token
    MOVE_MAZE  //  update the labyrinth position.