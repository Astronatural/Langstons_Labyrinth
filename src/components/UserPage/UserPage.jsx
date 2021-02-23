import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function UserPage() {
  // AKA the GM screen page.
  // const [newGame, setGame] = useState({ name:''});

  // const loader() =>

  // const deleter() => 

  // const newGame() =>

  const user = useSelector((store) => store.user);
  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <p>This is where you load your Labyrinths from!</p>
        {/* map over games linked to user_id here 
      {game.map(game => {
                    return (
                        <div key={game.id} onClick={()=>loader(game)} >
                            <h3>{game.name}</h3><h3>{game.totaltiles}</h3>
                            <h3>{game.timestamp?}</h3><button onClick={deleter}>Delete Labyrinth</button>
                        </div>
                        <br>
                    );
                })}*/}
        <p>This is where you make a new Labyrinth!</p>
        <input
          // value={newGame.name}
          // onChange={(e) => setGame({ ...newGame, name: e.target.value })}
          type="text"
          id="name"
          placeholder="Labyrinth Name" />
        {/* <input>Set Labyrinth Width</input> */}
        <button>Create and Load New Labyrinth</button>

        <LogOutButton className="btn" />
      </div>
    </>
  );
}

export default UserPage;
