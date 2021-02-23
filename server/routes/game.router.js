const express = require('express');
const { default: gameReducer } = require('../../src/redux/reducers/game.reducer');  // src/redux/reducers/game.reducer.js
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
});


// POST to add a newGame.
router.post('/', (req, res) => {
    console.log(req.body);
    // RETURNING "id" will give us back the id of the created game
    const newGameQuery = `
  INSERT INTO "game" ("name", "total_tiles")
  VALUES ($1, $2)
  RETURNING "id";`

    // above sets 2 values for a new game, others are default, still need to assign tiles.
    pool.query(newGameQuery, [req.body.name, req.body.total_tiles])
        .then(result => {
            console.log('New Game Id:', result.rows[0].id); //ID IS HERE!
            const createdGameId = result.rows[0].id  //ID IS HERE!

            const tile = then.pool.query('SELECT * FROM tiles ORDER BY RANDOM() LIMIT 1');
            const insertTileGenQuery = `
      INSERT INTO "games_tiles" ("game_id", "tile_id")
      VALUES  ($1, #2) WHERE "game_id"=$1;
      `
            var i = 0;
            while (i < req.body.total_tiles) {
                pool.query(insertTileGenQuery, [createdGameId, tile.id]);
                i++;
            }
            // .then(result => {  //  don't need a send status just yet...

            res.sendStatus(201);
        }).catch(err => {
            // catch for second query
            console.log(err);
            res.sendStatus(500)
        })

    // Catch for first query
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
})


module.exports = router;


// Scraps

            // removed from below line 27 for redundancy.
                // handle the tiles, first link it to new game.  If I insert the game_id #= to total_tiles that would get me the right #.
    //         const insertGameTileIDQuery = `  // this becomes redundant if I am going to the insert it 9 more times.
    //   INSERT INTO "games_tiles" ("game_id")
    //   VALUES  ($1);
    //   `
    //         pool.query(insertGameTileIDQuery, [createdGameId]).then(result => {
    //             // then figure out how to have game_tiles spawn all that info.