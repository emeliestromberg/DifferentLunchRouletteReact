import React from "react";
import "../App.css";
import "../styles/WelcomePage.css";
import { Link } from "react-router-dom";
import WelcomePageBackground from "../img/WelcomePageBackground.png"
import { url } from "inspector";

function WelcomePage() {
  return (
    <div style={{ backgroundImage: (WelcomePageBackground)}}>
      <div className="pictureAndButton">
        <div className="welcome">
          <h2 className="chatbubble">Welcome to</h2>
          <br />
          <h2 className="forre">Forefronts Lunch Roulette</h2>
        </div>

        <div className="enterButton">
          <h2>Click here to enter the tent</h2>
          <br />
          <br />

          <Link to="/MainMenu">ENTER</Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
 