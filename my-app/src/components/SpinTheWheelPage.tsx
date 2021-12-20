import React from "react";
import "../styles/SpinTheWheelPage.css";
import MainMenuNavigationButton from "./MainMenuNavigationButton";
import SpinTheWheelPageBackground from "../img/SpinTheWheelBackground.png"
import SpinTheWheelButton from "./SpinTheWheelButton";

interface Button {
  text: string;
  link: string;
}

const SpinTheWheelPage = () => {
  const buttons2 = [{ text: "Go Back", link: "/MainMenu" }];
  const buttons3 = [{ text: "Spin!", link: "/SpinTheWheel" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );
  const renderButtons2 = (knapp: Button) => (
    <SpinTheWheelButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div style={{ backgroundImage: (SpinTheWheelPageBackground) }}>
        <div>
          <ul>{buttons2.map(renderButtons)}</ul>
          <ul>{buttons3.map(renderButtons2)}</ul>
        </div>
      </div>
    </>
  );
};

export default SpinTheWheelPage;
