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
    const info = useSelector((store) => store.updateReducer);


    useEffect(() => { // onchange rerender.
        setGrid([...game]);
        setData([...info]);
    }, [game]);

    let [grid, setGrid] = useState([...game]);
    let [data, setData] = useState({info})

    useEffect(() => { // inital state set
        dispatch({ type: "FETCH_GAME", payload: params.id })
        dispatch({ type: "SET_INFO", payload: params.id })
        console.log(info);  // empty array? refills on refresh!!!
    }, []);


    // new randomizer + refactor
    // still might want to add tile reorienter, but maybe not now...
    function randomizer(grid) {
        const gridSize = grid.length;
        let newGrid = grid;
        const rows = Math.ceil(Math.sqrt(gridSize));
        // const cols = Math.ceil(Math.sqrt(gridSize));  // not used ATM
        // select a random row
        // generate random number 0-(cols) for which row or column to move.  Maybe this can just run twice without the double up of pos?
        const rowIndex = Math.floor((Math.random() * rows) + 0);
        const rowDirection = Math.random() > 0.5 ? 'left' : 'right';
        console.log('moving row', rowIndex, 'in', rowDirection);
        newGrid = shiftRow(newGrid, rowIndex, rowDirection);
        // newGrid = shiftRow(newGrid, 6, 'left');

        // random column
        const columnIndex = Math.floor((Math.random() * rows) + 0);
        const columnDirection = Math.random() > 0.5 ? 'up' : 'down';
        console.log('moving column', columnIndex, 'in', columnDirection);
        newGrid = shiftColumn(newGrid, columnIndex, columnDirection);
        console.log(newGrid);
        setGrid([...newGrid]);
        dispatch({ type: 'MOVE_MAZE', payload: newGrid })  // looks good
        // rid.sort(function (a, b) {
        //     return a.tile_pos - b.tile_pos;
        // })

        // dispatch({ type: "FETCH_GAME", payload: params.id })  // perhaps needed, once update works.

    }; // end randomizer





    return (
        <>
            <h1>{info.name} hello world</h1>
            <h2>{info.turn}</h2>
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