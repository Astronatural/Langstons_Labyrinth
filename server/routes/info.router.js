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


router.put(`/:id`, async (req, res) => {
    const mazeToUpdate = req.params.id;
    console.log('update turn', mazeToUpdate);  // mazeToUpdate correct
     try {
            const queryText = `UPDATE "game" SET "turn" = "turn" +1 WHERE "id" = $1;`;
            await pool.query(queryText, [ mazeToUpdate])
        res.sendStatus(201);
    } // end try
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}); // end turnUpdate.

module.exports = router;
