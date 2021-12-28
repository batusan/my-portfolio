import React from "react";
import hideRightMenu from "../utils";

function Blogs() {
  window.onload =()=>hideRightMenu(false);

  return (
    <div className="pt-5 pb-2 mt-md-5 rightToLeft">
      <div className="text-center text-light p-3">SOON !</div>
    </div>
  );
}

export default Blogs;
