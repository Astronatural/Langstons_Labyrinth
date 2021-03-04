const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// get the game DB info
router.get(`/:id`, (req, res) => {
    console.log('info router', req.params.id);  // good
    const infoOn = req.params.id;
    const gameInfoQuery = `SELECT * FROM "game" WHERE "id"=$1;`
    pool.query(gameInfoQuery, [infoOn])
        .then(result => {
            console.log('game info', result.rows); // good
            res.send(result.rows);
        }).catch(err => {
            console.log('Could not load game info')
        });
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
