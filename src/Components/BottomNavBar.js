import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/*
    <div className="">
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bghidden bg-dark ">
        <div
          className="navbar-collapse collapse d-flex justify-content-center align-items-center"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link btn-clr" to="/project">
                Projects
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link btn-clr" to="/blog">
                Blogs
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link btn-clr" to="/contactme">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

*/

function BottomNavBar() {
  let bottomBar;
  useEffect(() => {
    bottomBar = document.getElementById("bottomBar");
  });

  const hideMenu = () => {
    if (bottomBar.classList.contains("d-none")) {
      bottomBar.classList.remove("d-none");
    } else {
      bottomBar.classList.add("d-none");
    }
  };

  return (
    <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-black bghidden">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          onClick={() => {
            hideMenu();
          }}
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse collapse d-flex justify-content-center align-items-center d-none"
          id="bottomBar"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link btn-clr" to="/project">
                Projects
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link btn-clr" to="/blog">
                Blogs
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link btn-clr" to="/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BottomNavBar;
