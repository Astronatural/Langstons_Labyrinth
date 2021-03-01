import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Boss from './the_boss.png';
import Player from './blue_shield.png';
import './GameBoard.css';


function GameBoard() {

    // rotation styles !!! turns out something is forcing the tiles to stay in original position.  grr.
    const styles = ({

        zero: {
            transform: [{ rotate: '0deg' }]
        },

        ninety: {
            transform: [{ rotate: '90deg' }]
        },

        oneEight: {
            transform: [{ rotate: '180deg' }]
        },

        twoSeven: {
            transform: [{ rotate: '270deg' }]
        }
    }) // end styles


    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const game = useSelector((store) => store.gameReducer);
    const user = useSelector((store) => store.user);



    // let [grid, setGrid] = useState([{gridobject}]) // can I just slam a store output in here?

    useEffect(() => { // onchange rerender.
        setGrid([...game]);
    }, [game]);

    let [grid, setGrid] = useState([...game]);


    useEffect(() => { // inital state set
        console.log('params are', params)
        dispatch({ type: "FETCH_GAME", payload: params.id })
    }, []);



    //  affect G1->G7 *** 42-48
    function moveRow7R(grid) {
        for (let i = 42; i < 49; i++) {
            if ((grid[i].tile_pos) > 41) {
                grid[i].tile_pos += 1;
            } if (grid[i].tile_pos > 48) {
                grid[i].tile_pos = 42;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect G1->G7 *** 42-48
    function moveRow7L(grid) {
        for (let i = 42; i < 49; i++) {
            if ((grid[i].tile_pos) > 41) {
                grid[i].tile_pos -= 1;
            } if (grid[i].tile_pos < 42) {
                grid[i].tile_pos = 48;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect F1->F7 GTG 35-41
    function moveRow6R(grid) {
        for (let i = 35; i < 42; i++) {
            if ((grid[i].tile_pos) > 34) {
                grid[i].tile_pos += 1;
            } if (grid[i].tile_pos > 41) {
                grid[i].tile_pos = 35;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect F1->F7 GTG 35-41
    function moveRow6L(grid) {
        for (let i = 35; i < 42; i++) {
            if ((grid[i].tile_pos) > 34) {
                grid[i].tile_pos -= 1;
            } if (grid[i].tile_pos < 35) {
                grid[i].tile_pos = 41;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect E1->E7 GTG 28-34
    function moveRow5R(grid) {
        for (let i = 0; i < 35; i++) {
            if ((grid[i].tile_pos) > 27) {
                grid[i].tile_pos += 1;
            } if (grid[i].tile_pos > 34) {
                grid[i].tile_pos = 28;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect E1->E7 GTG 28-34
    function moveRow5L(grid) {
        for (let i = 28; i < 35; i++) {
            if ((grid[i].tile_pos) > 27) {
                grid[i].tile_pos -= 1;
            } if (grid[i].tile_pos < 28) {
                grid[i].tile_pos = 34;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect C1->C7 GTG 14-20
    function moveRow3R(grid) {
        for (let i = 14; i < 21; i++) {
            if ((grid[i].tile_pos) > 13) {
                grid[i].tile_pos += 1;
            } if (grid[i].tile_pos > 20) {
                grid[i].tile_pos = 14;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect C1->C7 GTG 14-20
    function moveRow3L(grid) {
        for (let i = 14; i < 21; i++) {
            if ((grid[i].tile_pos) > 13) {
                grid[i].tile_pos -= 1;
            } if (grid[i].tile_pos < 14) {
                grid[i].tile_pos = 20;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect B1->B7 GTG 7-13
    function moveRow2R(grid) {
        for (let i = 7; i < 14; i++) {
            if ((grid[i].tile_pos) > 6) {
                grid[i].tile_pos += 1;
            } if (grid[i].tile_pos > 13) {
                grid[i].tile_pos = 7;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect B1->B7 GTG 7-13
    function moveRow2L(grid) {
        for (let i = 7; i < 14; i++) {
            if ((grid[i].tile_pos) > 6) {
                grid[i].tile_pos -= 1;
            } if (grid[i].tile_pos < 7) {
                grid[i].tile_pos = 13;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A1->A7 GTG 0-6
    function moveRow1R(grid) {
        for (let i = 0; i < 7; i++) {
            if ((grid[i].tile_pos) < 7) {
                grid[i].tile_pos += 1;
            } if (grid[i].tile_pos > 6) {
                grid[i].tile_pos = 0;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A1->A7 GTG 0-6
    function moveRow1L(grid) {
        for (let i = 0; i < 7; i++) {
            if ((grid[i].tile_pos) < 7) {
                grid[i].tile_pos -= 1;
            } if (grid[i].tile_pos < 0) {
                grid[i].tile_pos = 6;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A7->G7 GTG  6->48
    function moveCol7Up(grid) {
        for (let i = 0; i < 49; i++) {
            if ((grid[i].tile_pos + 1) % 7 === 0) {
                grid[i].tile_pos -= 7;
            } if ((grid[i].tile_pos) < 0) {
                grid[i].tile_pos = 48;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A7->G7 GTG  6->48
    function moveCol7Dn(grid) {
        for (let i = 0; i < 49; i++) {
            if ((grid[i].tile_pos + 1) % 7 === 0) {
                grid[i].tile_pos += 7;
            } if ((grid[i].tile_pos) > 48) {
                grid[i].tile_pos = 6;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A6->G6  GTG  5->47
    function moveCol6Up(grid) {
        for (let i = 0; i < 48; i++) {
            if ((grid[i].tile_pos - 5) % 7 === 0) {
                grid[i].tile_pos -= 7;
            } if ((grid[i].tile_pos) < 0) {
                grid[i].tile_pos = 47;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A6->G6 GTG  5->47
    function moveCol6Dn(grid) {
        for (let i = 0; i < 48; i++) {
            if ((grid[i].tile_pos - 5) % 7 === 0) {
                grid[i].tile_pos += 7;
            } if ((grid[i].tile_pos) > 47) {
                grid[i].tile_pos = 5;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A5->G5  GTG  4->46
    function moveCol5Up(grid) {
        for (let i = 0; i < 47; i++) {
            if ((grid[i].tile_pos - 4) % 7 === 0) {
                grid[i].tile_pos -= 7;
            } if ((grid[i].tile_pos) < 0) {
                grid[i].tile_pos = 46;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A5->G5 GTG  4->46
    function moveCol5Dn(grid) {
        for (let i = 0; i < 46; i++) {
            if ((grid[i].tile_pos - 4) % 7 === 0) {
                grid[i].tile_pos += 7;
            } if ((grid[i].tile_pos) > 45) {
                grid[i].tile_pos = 4;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A3->G3  GTG
    function moveCol3Up(grid) {
        for (let i = 0; i < 45; i++) {
            if ((grid[i].tile_pos - 2) % 7 === 0) {
                grid[i].tile_pos -= 7;
            } if ((grid[i].tile_pos) < 0) {
                grid[i].tile_pos = 44;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };


    //  affect A3->G3 GTG
    function moveCol3Dn(grid) {
        for (let i = 0; i < 45; i++) {
            if ((grid[i].tile_pos - 2) % 7 === 0) {
                grid[i].tile_pos += 7;
            } if ((grid[i].tile_pos) > 44) {
                grid[i].tile_pos = 2;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };


    //  affect A2->G2  GTG
    function moveCol2Up(grid) {
        for (let i = 0; i < 44; i++) {
            if ((grid[i].tile_pos - 1) % 7 === 0) {
                grid[i].tile_pos -= 7;
            } if ((grid[i].tile_pos) < 0) {
                grid[i].tile_pos = 43;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };


    //  affect A2->G2  GTG
    function moveCol2Dn(grid) {
        for (let i = 0; i < 44; i++) {
            if ((grid[i].tile_pos - 1) % 7 === 0) {
                grid[i].tile_pos += 7;
            } if ((grid[i].tile_pos) > 43) {
                grid[i].tile_pos = 1;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A1->G1  GTG
    function moveCol1Up(grid) {
        for (let i = 0; i < Object.keys(grid).length; i++) {
            if ((grid[i].tile_pos) % 7 === 0) {
                grid[i].tile_pos -= 7;
            } if ((grid[i].tile_pos) < 0) {
                grid[i].tile_pos = 42;
            }
        }
        console.log('at end 1up', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };

    //  affect A1->G1  GTG
    function moveCol1Dn(grid) {
        console.log(Object.keys(grid).length);
        for (let i = 0; i < 42; i++) {
            if ((grid[i].tile_pos) % 7 === 0 || (grid[i].tile_pos) === 0) {
                grid[i].tile_pos += 7;
            } if ((grid[i].tile_pos) >= 42) {
                grid[i].tile_pos = 0;
            }
        }
        console.log('at end 1Dn', grid);
        grid.sort(function (a, b) {
            return a.tile_pos - b.tile_pos;
        });
        setGrid([...grid]);
    };


    // choose a random row and column to move, update the DB on tile pos.
    function randomizer() {
        // generate 2 rand # between 1-6.
        moveRow();
        moveCol();

        // switch/ case to assign that value to which function to trigger.
        // generate another 2 random numbers --> deal with rotatoin later, I guess.
        // deal with the PUT later too...
    };

    function moveCol() {
        const columnMover = Math.floor((Math.random() * 12) + 1);
        switch (columnMover) {
            case 1:
                moveCol1Dn(grid);
                break;
            case 2:
                moveCol1Up(grid);
                break;
            case 3:
                moveCol2Dn(grid);
                break;
            case 4:
                moveCol2Up(grid);
                break;
            case 5:
                moveCol3Dn(grid);
                break;
            case 6:
                moveCol3Up(grid);
                break;
            case 7:
                moveCol5Dn(grid);
                break;
            case 8:
                moveCol5Up(grid);
                break;
            case 9:
                moveCol6Dn(grid);
                break;
            case 10:
                moveCol6Up(grid);
                break;
            case 11:
                moveCol7Dn(grid);
                break;
            case 12:
                moveCol7Up(grid);
                break;
            default:
                break;
        }
    }; // end moveCol


        function moveRow() {
            const rowMover = Math.floor((Math.random() * 12) + 1);
            switch (rowMover) {
                case 1:
                    moveRow1L(grid);
                    break;
                case 2:
                    moveRow1R(grid);
                    break;
                case 3:
                    moveRow2L(grid);
                    break;
                case 4:
                    moveRow2R(grid);
                    break;
                case 5:
                    moveRow3L(grid);
                    break;
                case 6:
                    moveRow3R(grid);
                    break;
                case 7:
                    moveRow5L(grid);
                    break;
                case 8:
                    moveRow5R(grid);
                    break;
                case 9:
                    moveRow6L(grid);
                    break;
                case 10:
                    moveRow6R(grid);
                    break;
                case 11:
                    moveRow7L(grid);
                    break;
                case 12:
                    moveRow7R(grid);
                    break;
                default:
                    break;
            } // end moveRow
            };


            return (
                <>
                    {/* <p>{game.name}</p> // is this stopping the flow?*/}
                    <div className="button-container">
                        <button onClick={() => moveCol1Up(grid)}>moveCol1Up</button>
                        <button onClick={() => moveCol1Dn(grid)}>moveCol1Dn</button>

                        <button onClick={() => moveCol2Up(grid)}>moveCol2Up</button>
                        <button onClick={() => moveCol2Dn(grid)}>moveCol2Dn</button>

                        <button onClick={() => moveCol3Up(grid)}>moveCol3Up</button>
                        <button onClick={() => moveCol3Dn(grid)}>moveCol3Dn</button>



                        <button onClick={() => moveCol5Up(grid)}>moveCol5Up</button>
                        <button onClick={() => moveCol5Dn(grid)}>moveCol5Dn</button>

                        <button onClick={() => moveCol6Up(grid)}>moveCol6Up</button>
                        <button onClick={() => moveCol6Dn(grid)}>moveCol6Dn</button>

                        <button onClick={() => moveCol7Up(grid)}>moveCol7Up</button>
                        <button onClick={() => moveCol7Dn(grid)}>moveCol7Dn</button>



                        <button onClick={() => moveRow1R(grid)}>moveRow1R</button>
                        <button onClick={() => moveRow1L(grid)}>moveRow1L</button>

                        <button onClick={() => moveRow2R(grid)}>moveRow2R</button>
                        <button onClick={() => moveRow2L(grid)}>moveRow2L</button>

                        <button onClick={() => moveRow3R(grid)}>moveRow3R</button>
                        <button onClick={() => moveRow3L(grid)}>moveRow3L</button>



                        <button onClick={() => moveRow5R(grid)}>moveRow5R</button>
                        <button onClick={() => moveRow5L(grid)}>moveRow5L</button>

                        <button onClick={() => moveRow6R(grid)}>moveRow6R</button>
                        <button onClick={() => moveRow6L(grid)}>moveRow6L</button>

                        <button onClick={() => moveRow7R(grid)}>moveRow7R</button>
                        <button onClick={() => moveRow7L(grid)}>moveRow7L</button>

                        <button onClick={() => randomizer()}>End Turn</button>

                        <img className="token" src={Boss} alt="red skull" />
                        <img className="token" src={Player} alt="blue shield" />

                    </div>
                    {game.length > 0 &&
                        <div className="bear-container">
                            {grid.map(tile => { // style={tile.tile_orientation} eventually. src/components/GameBoard/Tiles/fork.png
                                return (
                                    <div key={tile.tile_pos} >
                                        <div>
                                            <p>{tile.id}</p>
                                            <br></br>
                                            <img style={{ transform: [{ rotate: '270deg' }] }} src={tile.shape_url} />
                                        </div>
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

/*scraps
  <img style={styles.tile.tile_orientation} src={tile.shape_url} />
*/

// /Users/jdk/eda/tier_3/LangstonsLabyrinth/public/tiles/fork.png
// /Users/jdk/eda/tier_3/LangstonsLabyrinth/src/components/GameBoard/GameBoard.jsx