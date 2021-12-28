import React from "react";
import { Link } from "react-router-dom";
import hideRightMenu from "../utils";

function NotFound(props) {
  window.onload = () => hideRightMenu(true);
  return (
    <div className="text-color">
      <h1 className="display-1" style={{textAlign:"start"}}>404</h1>
      <br />
      <h1>Page not found!</h1>
      <Link className="remove-link-style" to='/' onClick={()=>hideRightMenu(false)}>Go Home</Link>
    </div>
  );
}

export default NotFound;
