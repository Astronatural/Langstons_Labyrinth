import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function UserPage() {
  // AKA the GM screen page.

  const dispatch = useDispatch();
  const game = useSelector((store) => store.gameReducer);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_GAMES' });
  }, []);

  let [newGame, setGame] = useState({
    name: '',
    total_tiles: '',
  });

  const makeNewGame = event => {
    event.preventDefault();
    console.log("in makeNewGame", newGame);
    dispatch({ type: 'MAKE_GAME', payload: newGame });
    setGame({
      name: '',
      total_tiles: ''
    }).then.dispatch({ type: 'FETCH_GAMES' })
  };


  const loader = () => {};

  const deleter = () => {};

  return (
    <>    
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        {/* <p>Your ID is: {user.id}</p> */}
        <p>This is where you load your Labyrinths from!</p>
        {/* map over games linked to user_id here */}
        <table>
          <thead>
            <tr>
              <th>Labyrinth Name</th><th>Turn #</th><th><span></span></th>
            </tr>
          </thead>
          <tbody>
            {game.map(game => {
              return (
                <tr key={game.id} onClick={() => loader(game)} >
                  <td>{game.name}</td><td>{game.turn}</td>
                  <td><button onClick={deleter}>Delete Labyrinth</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        <p>This is where you make a new Labyrinth!</p>
        <form onSubmit={makeNewGame} >
          <input
            value={newGame.name}
            onChange={(e) => setGame({ ...newGame, name: e.target.value })}
            type="text"
            id="name"
            placeholder="Labyrinth Name" />
          <input
            value={newGame.total_tiles}
            onChange={(e) => setGame({ ...newGame, total_tiles: e.target.value })}
            type="number"
            id="tiles"
            placeholder="Set Labyrinth Width(9)" />
          <div className="buttonDiv">
            <button type="submit" value='submit'>Create and Load New Labyrinth</button>
            {/* <LogOutButton className="btn" />  // this is in the nav at the top, don't need here. */}
          </div>
        </form>
      </>
  );
  
}

export default UserPage;
