import React from 'react';
import { useState } from 'react';



function GameBoard() {

    // let [grid, setGrid] = useState([{gridobject}]) // can I just slam a store output in here?

    // if (grid[i].position % ({total_tiles}/{total_tiles}) === 0) {
        
    // }

    return (
        <div className="container">
            <p>This is where you will see your labyrinth!</p>
            <div className="grid-container">
                {grid.map(tile => {
                    return (
                        <div key={tile.id}>{tile.id}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default GameBoard;
