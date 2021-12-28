import React from "react";
import AboutMe from "../Components/AboutMe";

function StickySide() {
  return (
    <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center me-auto sticky-md-top leftToRight">
      <AboutMe />
    </div>
  );
}

export default StickySide;
