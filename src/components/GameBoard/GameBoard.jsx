import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Boss from './the_boss.png';
import Player from './blue_shield.png';
import './GameBoard.css';
import { shiftRow, shiftColumn } from '../../utils/labyrinth.js';

function GameBoard() {


    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const game = useSelector((store) => store.gameReducer);
    const user = useSelector((store) => store.user);


    useEffect(() => { // onchange rerender.
        setGrid([...game]);
        // probably need game table info in here too.
    }, [game]);

    let [grid, setGrid] = useState([...game]);

    useEffect(() => { // inital state set
        console.log('params are', params)
        dispatch({ type: "FETCH_GAME", payload: params.id })
        // make space to load game table info too.
    }, []);


    // new randomizer + refactor
    function randomizer(grid) {
        const gridSize = grid.length;
        let newGrid = grid;
        const rows = Math.ceil(Math.sqrt(gridSize));
        const cols = Math.ceil(Math.sqrt(gridSize));
        // select a random row
        // generate random number 0-(cols) for which row or column to move.  Maybe this can just run twice without the double up of pos?
        const rowIndex = Math.floor((Math.random() * rows) + 0);
        const rowDirection = Math.random() > 0.5 ? 'left' : 'right';
        console.log('moving row',  rowIndex, 'in', rowDirection);
        newGrid = shiftRow(newGrid, rowIndex, rowDirection);
        // newGrid = shiftRow(newGrid, 6, 'left');
        
        // random column
        const columnIndex = Math.floor((Math.random() * rows) + 0);
        const columnDirection = Math.random() > 0.5 ? 'up' : 'down';
        console.log('moving column', columnIndex, 'in', columnDirection);
        newGrid = shiftColumn(newGrid, columnIndex, columnDirection);
        // newGrid = shiftColumn(newGrid, 1, 'up');

        console.log(newGrid);
        setGrid([...newGrid]);
        
    }; // end randomizer



    return (
        <>
            {/* <h1>{game.name}</h1> game does not contain name, this is game_tiles */}
            {/* <h2 value={gameTable.turn}>{turnCount.turn}</h2> */}
            <div className="button-container">


                <button onClick={() => randomizer(grid)}>End Turn</button>

                <img className="token" src={Boss} alt="red skull" />
                <img className="token" src={Player} alt="blue shield" />

            </div>
            {game.length > 0 &&
                <div className="grid-container">
                    {grid.map(tile => {
                        return (
                            <div key={tile.id} className="game-tile">
                                <p className="tileTitle">{tile.id}</p>
                                <img className={tile.tile_orientation} src={tile.shape_url} />
                                {/* token goes here */}
                                {/* <img className="token" src={Player} alt="blue shield" /> */}
                            </div>
                        );
                    })}
                </div>
            }
            {/* <button>Save and Exit</button> */}
        </>
    )
};


export default GameBoard;