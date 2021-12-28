import React from "react";
import AboutMe from "../Components/AboutMe";

function StickySide() {
  return (
    <div
      className="p-sm-4  col-sm-6 d-flex flex-column justify-content-center align-items-center me-auto sticky-md-top leftToRight"
      id="leftSide"
    >
      <AboutMe />
    </div>
  );
}

export default StickySide;
