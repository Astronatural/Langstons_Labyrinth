import React from 'react';



function GameBoard() {


    return (
        <div className="container">
            <p>This is where you will see your labyrinth!</p>
            <div className="grid-container">
                {grid.map(tile => {
                    return (
                        <div key={tile.position}>{tile.name}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default GameBoard;
