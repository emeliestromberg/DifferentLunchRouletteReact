import React from "react";
import "../styles/RemovePersonPage.css";
import MainMenuNavigationButton from "./MainMenuNavigationButton";
import RemovePersonPageBackground from "../img/RemovePersonPageBackground.png";

interface Button {
  text: string;
  link: string;
}

const RemovePersonPage = () => {
  const buttons2 = [{ text: "Go Back", link: "/MainMenu" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div style={{ backgroundImage: (RemovePersonPageBackground) }}>
        <div>
          <ul>{buttons2.map(renderButtons)}</ul>
        </div>
      </div>
    </>
  );
};

export default RemovePersonPage;
