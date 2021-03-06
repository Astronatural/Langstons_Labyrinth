/* Utilities for working with a generic labrynth */

// override the % operator to behave correctly for negative numbers
// https://stackoverflow.com/a/4467559
// Can use with (-1).mod(2) instead of -1 % 2
Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
};

export const calculateNewPosition = (currentPosition, direction, gridSize, skipTreasureRoom = true) => {
    const rows = Math.sqrt(gridSize);
    const treasureRoom = Math.ceil((gridSize - 1) / 2);

    // if (currentPosition === treasureRoom && skipTreasureRoom) {
    //     // Treasure room does not move
    //     return currentPosition;
    // }

    // if the currentPosition is the treasure room, return current position
    // if we are one above treasure room and moving down, add one more row (+row) to the position
    // if we are one below treasure room and moving up, subtract one more row (-row) to the position
    // if we are one left and moving right, add +1 (+2 total)
    // if we are one right and moving left, subtract -1 (-2 total)
    // treasure room is: last position / 2 aka: (gridSize-1)/2

    // up
    if (direction === "up") {
        let newPos = currentPosition - rows;
        if (newPos < 0) {
            newPos = newPos + gridSize;
        }
        // space for skipTreasureRoom
        return newPos;
    }
    // return (currentPosition - rows) < 0 ? newPos + gridSize : (currentPosition - rows);

    // down
    if (direction === "down") {
        let newPos = currentPosition + rows;
        if (newPos >= gridSize) {
            newPos = newPos - gridSize;
        }
        // if (newPos === treasureRoom && skipTreasureRoom) {
        //     newPos = newPos + rows;
        // }
        return newPos;
    }

    // left    // Can use with (-1).mod(2) instead of -1 % 2
    if (direction === "left") {
        let newPos = currentPosition - 1;
        //           -1    %   3
        if ((newPos).mod(rows) === (rows - 1)) {
            newPos = newPos + rows;
        }
        // if (newPos === treasureRoom && skipTreasureRoom){
        //     newPos = newPos - 1;      
        // }

        return newPos;
    }

    // right    
    if (direction === "right") {
        let newPos = currentPosition + 1;
        if ((newPos).mod(rows) === (rows - rows)) {
            newPos = newPos - (rows);
        }
        // if (newPos === treasureRoom && skipTreasureRoom){
        //     newPos = newPos + 1;
        // }
        return newPos;
    }
}

export const shiftRow = (tiles, rowIndex, direction) => {
    // Given an array of tiles (hopefully of correct perfect square length),
    // shift all tiles located in rowIndex by the direction given
    // how to turn:
    //  0 into 0, 1, 2, 3, 4, 5, 6
    //  1 into 7, 8, 9, 10, 11, 12, 13
    //  2 into 14, 15, 16, 17, 18, 19, 20
    // (rows-1)*rowIndex
    // etc.
    const gridSize = tiles.length;
    const rows = Math.ceil(Math.sqrt(gridSize));
    // loop over the entire row
    // for each tile in the row:
    //  update its position based on the result of the position calculation
    //  save the position back to the tile object
    // sort the array again
    const startingPos = (rows)*rowIndex;
    for (let i = startingPos; i < (startingPos + rows); i++) {
        const currentPosition = tiles[i].tile_pos;
        const newPos = calculateNewPosition(currentPosition, direction, gridSize);
        console.log(`Moving tile ${tiles[i].id} from ${tiles[i].tile_pos} to ${newPos}`)
        tiles[i].tile_pos = newPos;
    }
    tiles.sort(function (a, b) {
        return a.tile_pos - b.tile_pos;
    }) 
    return [...tiles];
} 

export const shiftColumn = (tiles, columnIndex, direction) => {
    // loop over tile array
    // for each column
    // update tile.pos
    const gridSize = tiles.length;
    const columns = Math.ceil(Math.sqrt(gridSize));
    // loop over the entire row
    // for each tile in the row:
    //  update its position based on the result of the position calculation
    //  save the position back to the tile object
    // sort the array again
    // 0,7,14,21,28,35,42; 
    const startingPos = columnIndex;
    for (let i = startingPos; i < (gridSize); i+=columns) {
        const currentPosition = tiles[i].tile_pos;
        const newPos = calculateNewPosition(currentPosition, direction, gridSize);
        tiles[i].tile_pos = newPos;
    }
    tiles.sort(function (a, b) {
        return a.tile_pos - b.tile_pos;
    }) 
    return [...tiles]; 
}