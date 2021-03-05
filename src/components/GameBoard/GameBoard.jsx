import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Boss from './the_boss.png';
import Player from './blue_shield.png';
import './GameBoard.css';
import { shiftRow, shiftColumn } from '../../utils/labyrinth.js';
import { actionChannel } from 'redux-saga/effects';


function GameBoard() {


    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const game = useSelector((store) => store.gameReducer);
    // const user = useSelector((store) => store.user);
    const info = useSelector((store) => store.updateReducer);


    useEffect(() => { // onchange rerender.
        setGrid([...game]);
        // setData([info]);  // tried [...info], [info], [{info}], { info }, info
        console.log('in 2nd gb useState', info[0]);  // it makes it here as [{...}], when the second SET_INFO was in.
        // dispatch({ type: 'GAME_INFO', payload: params.id });
    }, [game]);  // maybe I need info here.

    let [grid, setGrid] = useState([...game]);
    // let [data, setData] = useState([info]);  // tried [info], [...info] (not iterable), {info}.

    useEffect(() => { // inital state set
        dispatch({ type: "FETCH_GAME", payload: params.id });
        dispatch({ type: 'GAME_INFO', payload: params.id });
        // dispatch({ type: "SET_INFO", payload: params.id, });  // tried payload: params.id, payload: action.payload, payload: game.data
        console.log('in init uS gb', info);  // empty array? refills on refresh!!! [0] is undefined.
    }, []);  // loop if anything here.


    const tokenObjects = [
        {
            name: 'boss',
            image: '/the_boss.png',
            position: 24               //info[0].boss_pos
        },
        {
            name: 'player',
            image: './blue_shield.png',
            position: 0                 //info[0].party_pos
        }]


    // new randomizer + refactor
    // still might want to add tile reorienter, but maybe not now...
    function randomizer(grid) {
        const gridSize = grid.length;
        let newGrid = grid;
        const rows = Math.ceil(Math.sqrt(gridSize));
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
        dispatch({ type: 'MOVE_MAZE', payload: [...newGrid] })
        // increase the turnCount and dispatch it.
        dispatch({ type: "ADD_TURN", payload: params.id });
    }; // end randomizer





    return (
        <>

            <div className="button-container">
                <button onClick={() => randomizer(grid)}>End Turn</button>

                {info.length > 0 &&
                    <>
                        <h1>{info[0].name}</h1>
                        <h1>Turn #: {info[0].turn}</h1>
                    </>
                }
                <img className="token" src={Player} alt="blue shield" />
                <h1>Player's Turn</h1>
                <img className="token" src={Boss} alt="red skull" />
                <h1>Boss's Turn</h1>
                <button onClick={() => history.push(`/user`)}>Exit the Labyrinth</button>
            </div>

            <div className='gameBox'>
                {game.length > 0 &&
                    <div className="grid-container">
                        {grid.map(tile => {
                            return (
                                <div key={tile.id} className="game-tile">
                                    <p className="tileTitle">{tile.id}</p>
                                    <img className={tile.tile_orientation} src={tile.shape_url} />
                                    <img className="token" id='player' src={Player} alt="blue shield" />
                                    <img className="token" id='boss' src={Boss} alt="red skull" />
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        </>
    )
};


export default GameBoard;