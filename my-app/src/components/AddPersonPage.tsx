import React from "react";
import "../styles/AddPersonPage.css";
import MainMenuNavigationButton from "./MainMenuNavigationButton";
import AddPersonPageBackground from "../img/AddPersonPageBackground.png";

interface Button {
  text: string;
  link: string;
}

const AddPersonPage = () => {
  const buttons2 = [{ text: "Go Back", link: "/MainMenu" }];

  const renderButtons = (knapp: Button) => (
    <MainMenuNavigationButton buttontext={knapp.text} link={knapp.link} />
  );

  return (
    <>
      <div style={{ backgroundImage: (AddPersonPageBackground) }}>
        <div>
          <ul>{buttons2.map(renderButtons)}</ul>
        </div>
      </div>
    </>
  );
};

export default AddPersonPage;
