import React from "react";
import hideRightMenu from "../utils";

function ContactMe() {
  window.onload = () => hideRightMenu(false);

  return (
    <div className="text-light rightToLeft pt-lg-5 mt-lg-5">
      <div className="text-center mt-3">Contact Me</div>
      <hr className="neon-bar" style={{ color: "white" }} />

      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item">
            <div className="app-contact">
              <div className="text-center ">
                Lets <span className="primary-color"> work</span> together. I am
                looking for job opportunities, and would
                <span className="primary-color"> love</span> to connect! Drop me
                an email and I will get back to you;
              </div>
            </div>
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="NAME"
                  value="Batuhan"
                  disabled
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="EMAIL"
                  disabled
                  value={"batuhansann@gmail.com"}
                />
              </div>

              <div className="app-form-group">
                <a
                  href="https://github.com/batusan"
                  className="remove-link-style"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
