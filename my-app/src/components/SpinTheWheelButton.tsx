import React, { FunctionComponent } from "react";

interface Props {
  buttontext: string;
  link: string;
}

const SpinTheWheelButton: FunctionComponent<Props> = (props) => {
  return (
    <li>
      <div className="button playbutton button1">
        <a href={props.link}>{props.buttontext}</a>
      </div>
    </li>
  );
};

export default SpinTheWheelButton;
