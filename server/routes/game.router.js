const express = require('express');
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

            const createdGameId = result.rows[0].id

            // Now handle the tiles, link it to new game
            const insertGameTileIDQuery = `
      INSERT INTO "games_tiles" ("game_id", "genre_id")
      VALUES  ($1, $2);
      `
            pool.query(insertGameTileIDQuery, [createdGameId, req.body.genre_id]).then(result => {
                // then figure out how to have game_tiles spwan all that info.
                const insertTileGenQuery = `
      INSERT INTO "games_tiles" ("game_id", "genre_id")
      VALUES  ($1, $2) WHERE "game_id"=$1;
      `            pool.query(insertGameTileIDQuery, [createdGameId, req.body.genre_id]).then(result => {

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
})

module.exports = router;
