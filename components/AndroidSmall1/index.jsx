import React from "react";
import "./AndroidSmall1.css";

function AndroidSmall1(props) {
  const { frame, spanText } = props;

  return (
    <div className="container-center-horizontal">
      <div className="android-small-1 screen">
        <img className="frame" src={frame} alt="Frame" />
        <h1 className="title montserrat-normal-mischka-24px">
          <span className="montserrat-normal-mischka-24px">{spanText}</span>
        </h1>
      </div>
    </div>
  );
}

export default AndroidSmall1;
