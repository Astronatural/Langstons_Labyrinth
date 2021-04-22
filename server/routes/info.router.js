const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET the game DB info
router.get(`/:id`, (req, res) => {
    console.log('info router', req.params.id); 
    const infoOn = req.params.id;
    const gameInfoQuery = `SELECT * FROM "game" WHERE "id"=$1;`
    pool.query(gameInfoQuery, [infoOn])
        .then(result => {
            console.log('game info', result.rows);
            res.send(result.rows[0]);
        }).catch(err => {
            console.log('Could not load game info')
        });
});


//  UPDATE the turn counter in game DB
router.put(`/:id`, async (req, res) => {
    const mazeToUpdate = req.params.id;
    console.log('update turn', mazeToUpdate);
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


// UPDATE party token position
router.put('/party/:id', (req, res) => {
    const gameToUpdate = req.params.id;
    console.log(req.body);
    console.log(req.params);
    const newPartyPos = req.body.payload; 
    console.log('router update party_pos', gameToUpdate, newPartyPos);
    const queryText = `UPDATE "game" SET "party_pos"=$1 WHERE "id" = $2;`;
    pool.query(queryText, [newPartyPos, gameToUpdate])
    .then(()=>{
        res.sendStatus(200);
    }).catch(err => {
        console.log('error in party pos update', error);
        sendStatus(500);
    });
});


// UPDATE boss token position
router.put('/boss/:id', (req, res) => {
    const gameToUpdate = req.params.id;
    const newBossPos = req.body.payload;
    console.log('router update party_pos', gameToUpdate, newBossPos);
    const queryText = `UPDATE "game" SET "boss_pos"=$1 WHERE "id" = $2;`;
    pool.query(queryText, [newBossPos, gameToUpdate])
        .then(() => {
            res.sendStatus(200);
        }).catch(err => {
            console.log('error in boss pos update', error);
            sendStatus(500);
        });
});

module.exports = router;
