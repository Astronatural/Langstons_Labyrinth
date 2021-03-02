import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Boss from './the_boss.png';
import Player from './blue_shield.png';
import './GameBoard.css';


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


    function randomizer(grid) {
        const columnMover = Math.floor((Math.random() * 12) + 1);
        switch (grid, columnMover) {
            case 1:
                //  moveCol1Dn
                for (let i = 0; i < 42; i++) {
                    if ((grid[i].tile_pos) % 7 === 0 || (grid[i].tile_pos) === 0) {
                        grid[i].tile_pos += 7;
                    } if ((grid[i].tile_pos) >= 42) {
                        grid[i].tile_pos = 0;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);  //  not sure why when I remove these 5 lines I get double keys...
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 2:
                // MV1U
                for (let i = 0; i < Object.keys(grid).length; i++) {
                    if ((grid[i].tile_pos) % 7 === 0) {
                        grid[i].tile_pos -= 7;
                    } if ((grid[i].tile_pos) < 0) {
                        grid[i].tile_pos = 42;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1up', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 3:
                // MC2D
                for (let i = 0; i < 44; i++) {
                    if ((grid[i].tile_pos - 1) % 7 === 0) {
                        grid[i].tile_pos += 7;
                    } if ((grid[i].tile_pos) > 43) {
                        grid[i].tile_pos = 1;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 4:
                // MC2U
                for (let i = 0; i < 44; i++) {
                    if ((grid[i].tile_pos - 1) % 7 === 0) {
                        grid[i].tile_pos -= 7;
                    } if ((grid[i].tile_pos) < 0) {
                        grid[i].tile_pos = 43;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 5:
                // MC3D
                for (let i = 0; i < 45; i++) {
                    if ((grid[i].tile_pos - 2) % 7 === 0) {
                        grid[i].tile_pos += 7;
                    } if ((grid[i].tile_pos) > 44) {
                        grid[i].tile_pos = 2;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 6:
                //  MC3U
                for (let i = 0; i < 45; i++) {
                    if ((grid[i].tile_pos - 2) % 7 === 0) {
                        grid[i].tile_pos -= 7;
                    } if ((grid[i].tile_pos) < 0) {
                        grid[i].tile_pos = 44;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 7:
                //  MC5D
                for (let i = 0; i < 46; i++) {
                    if ((grid[i].tile_pos - 4) % 7 === 0) {
                        grid[i].tile_pos += 7;
                    } if ((grid[i].tile_pos) > 45) {
                        grid[i].tile_pos = 4;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 8:
                // MC5U
                for (let i = 0; i < 47; i++) {
                    if ((grid[i].tile_pos - 4) % 7 === 0) {
                        grid[i].tile_pos -= 7;
                    } if ((grid[i].tile_pos) < 0) {
                        grid[i].tile_pos = 46;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 9:
                //  MC6D
                for (let i = 0; i < 48; i++) {
                    if ((grid[i].tile_pos - 5) % 7 === 0) {
                        grid[i].tile_pos += 7;
                    } if ((grid[i].tile_pos) > 47) {
                        grid[i].tile_pos = 5;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 10:
                //  MC6U
                for (let i = 0; i < 48; i++) {
                    if ((grid[i].tile_pos - 5) % 7 === 0) {
                        grid[i].tile_pos -= 7;
                    } if ((grid[i].tile_pos) < 0) {
                        grid[i].tile_pos = 47;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 11:
                // moveCol7Dn(grid);
                for (let i = 0; i < 49; i++) {
                    if ((grid[i].tile_pos + 1) % 7 === 0) {
                        grid[i].tile_pos += 7;
                    } if ((grid[i].tile_pos) > 48) {
                        grid[i].tile_pos = 6;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 12:
                // moveCol7Up(grid);
                for (let i = 0; i < 49; i++) {
                    if ((grid[i].tile_pos + 1) % 7 === 0) {
                        grid[i].tile_pos -= 7;
                    } if ((grid[i].tile_pos) < 0) {
                        grid[i].tile_pos = 48;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            default:
                break;
        };
        const rowMover = Math.floor((Math.random() * 12) + 1);
        switch (grid, rowMover) {
            case 1:
                // moveRow1L(grid);
                for (let i = 0; i < 7; i++) {
                    if ((grid[i].tile_pos) < 7) {
                        grid[i].tile_pos -= 1;
                    } if (grid[i].tile_pos < 0) {
                        grid[i].tile_pos = 6;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 2:
                // moveRow1R(grid);
                for (let i = 0; i < 7; i++) {
                    if ((grid[i].tile_pos) < 7) {
                        grid[i].tile_pos += 1;
                    } if (grid[i].tile_pos > 6) {
                        grid[i].tile_pos = 0;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 3:
                // moveRow2L(grid);
                for (let i = 7; i < 14; i++) {
                    if ((grid[i].tile_pos) > 6) {
                        grid[i].tile_pos -= 1;
                    } if (grid[i].tile_pos < 7) {
                        grid[i].tile_pos = 13;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 4:
                // moveRow2R(grid);
                for (let i = 7; i < 14; i++) {
                    if ((grid[i].tile_pos) > 6) {
                        grid[i].tile_pos += 1;
                    } if (grid[i].tile_pos > 13) {
                        grid[i].tile_pos = 7;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 5:
                // moveRow3L(grid);
                for (let i = 14; i < 21; i++) {
                    if ((grid[i].tile_pos) > 13) {
                        grid[i].tile_pos -= 1;
                    } if (grid[i].tile_pos < 14) {
                        grid[i].tile_pos = 20;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 6:
                // moveRow3R(grid);
                for (let i = 14; i < 21; i++) {
                    if ((grid[i].tile_pos) > 13) {
                        grid[i].tile_pos += 1;
                    } if (grid[i].tile_pos > 20) {
                        grid[i].tile_pos = 14;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 7:
                // moveRow5L(grid);
                for (let i = 28; i < 35; i++) {
                    if ((grid[i].tile_pos) > 27) {
                        grid[i].tile_pos -= 1;
                    } if (grid[i].tile_pos < 28) {
                        grid[i].tile_pos = 34;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 8:
                // moveRow5R(grid);
                for (let i = 0; i < 35; i++) {
                    if ((grid[i].tile_pos) > 27) {
                        grid[i].tile_pos += 1;
                    } if (grid[i].tile_pos > 34) {
                        grid[i].tile_pos = 28;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 9:
                // moveRow6L(grid);
                for (let i = 35; i < 42; i++) {
                    if ((grid[i].tile_pos) > 34) {
                        grid[i].tile_pos -= 1;
                    } if (grid[i].tile_pos < 35) {
                        grid[i].tile_pos = 41;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 10:
                // moveRow6R(grid);
                for (let i = 35; i < 42; i++) {
                    if ((grid[i].tile_pos) > 34) {
                        grid[i].tile_pos += 1;
                    } if (grid[i].tile_pos > 41) {
                        grid[i].tile_pos = 35;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 11:
                // moveRow7L(grid);
                for (let i = 42; i < 49; i++) {
                    if ((grid[i].tile_pos) > 41) {
                        grid[i].tile_pos -= 1;
                    } if (grid[i].tile_pos < 42) {
                        grid[i].tile_pos = 48;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            case 12:
                // moveRow7R(grid);
                for (let i = 42; i < 49; i++) {
                    if ((grid[i].tile_pos) > 41) {
                        grid[i].tile_pos += 1;
                    } if (grid[i].tile_pos > 48) {
                        grid[i].tile_pos = 42;
                        let rotVal = Math.floor((Math.random() * 4) + 1);
                        if (rotVal === 1) {
                            grid[i].tile_orientation = 'zero';
                        }
                        if (rotVal === 2) {
                            grid[i].tile_orientation = 'ninety';
                        }
                        if (rotVal === 3) {
                            grid[i].tile_orientation = 'oneEight';
                        }
                        if (rotVal === 4) {
                            grid[i].tile_orientation = 'twoSeven';
                        }
                    }
                }
                console.log('at end 1R', grid);
                grid.sort(function (a, b) {
                    return a.tile_pos - b.tile_pos;
                });
                setGrid([...grid]);
                break;
            default:
                break;
        } // end rowmover
        // PUT the updated tile positions.
        dispatch({ type: })

    }; // end randomizer


    return (
        <>
            {/* <p>{game.name}</p> game does not contain name, this is game_tiles */}
            {/* <h1 value={gameTable.turn}>{turnCount.turn}</h1> */}
            <div className="button-container">


                <button onClick={() => randomizer(grid)}>End Turn</button>

                <img className="token" src={Boss} alt="red skull" />
                <img className="token" src={Player} alt="blue shield" />

            </div>
            {game.length > 0 &&
                <div className="bear-container">
                    {grid.map(tile => {
                        return (
                            <div key={tile.tile_pos} >
                                <div>
                                    <p>{tile.id}</p>
                                    <img className={tile.tile_orientation} src={tile.shape_url} />
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
<img style={{transform: 'rotate(90deg)'}} src={tile.shape_url} />  <-- this is the correct syntax.
  <img style={styles.tile.tile_orientation} src={tile.shape_url} />
  <img style={"transform: rotate 180deg;"} src={tile.shape_url} />
<img style={{transform: [{rotate: '90deg' }]}} src={tile.shape_url} />
{{marginRight: spacing + 'em'}
<img style={{transformRotate: 180}} src={tile.shape_url} />
<img style={{transform: 'rotate + 180deg'}} src={tile.shape_url} />
<img style={{tile: 'tile.tile_orientation'}} src={tile.shape_url} />
                                    {/* <img style={tile.tile_orientation} src={tile.shape_url} />
{/* <img style={zero} src={tile.shape_url} />
                                    <img style={ninety} src={tile.shape_url} />
                                    <img style={oneEight} src={tile.shape_url} />
                                    <img style={twoSeven} src={tile.shape_url} />
                                                                        {/* <img style={angle} src={tile.shape_url} />

*/