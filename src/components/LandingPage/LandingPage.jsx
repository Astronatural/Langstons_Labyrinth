import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import SplashScreen from './splashscreen.png';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState("You're Here Forever...");
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="splashContainer">
      <h2 id="wlcm">"You're Here Forever..."</h2>

      <div className="grid">
        <div className="splashBox">
          <img className="splash" src={SplashScreen}/>
        </div>
        {/* <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
