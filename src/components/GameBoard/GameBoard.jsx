import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './GameBoard.css';


function GameBoard() {


    const history = useHistory();
    const dispatch = useDispatch();
    const game = useSelector((store) => store.gameReducer);
    const user = useSelector((store) => store.user);

    useEffect(() => {
    }, []);

    let [grid, setGrid] = useState([{...game}]);
    // let [grid, setGrid] = useState([{gridobject}]) // can I just slam a store output in here?

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }

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
    }


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
    }


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
    }


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
    }

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
    }

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
    }



    return (
        <>
            <p>{game.name}</p>
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

            </div>

            <div className="bear-container">
                {grid.map(tile => {
                    return (
                        <div key={tile.tile_pos} style={tile.tile_orientation}>
                            <div>{tile.shape_url}{tile.id}</div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}


export default GameBoard;
