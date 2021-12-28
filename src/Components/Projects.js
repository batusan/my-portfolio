import React from "react";

function Projects() {
  return (
    <div className="projects pt-md-3 rightToLeft">
      <div className="text-light text-center pb-2 mt-md-5">Projects</div>
      <hr className="neon-bar" />

      <div className="repo card mb-2 p-2 p-md-4 text-light container">
        <div className="row">
          <div className="card-body text-start col-9">
            <h5 className="card-title">React - Portfolio</h5>
            <p className="card-text text-white-50">
              Personel web portfolio , built using React.
            </p>
          </div>
          <div
            className="col-3 d-flex justify-content-center align-items-center"
            style={{ color: "white" }}
          >
            <a href="https://github.com/batusan" className="remove-link-style">
              <i className="fas fa-link fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="repo card mb-2 p-2 p-md-4 text-light container">
        <div className="row">
          <div className="card-body text-start col-9">
            <h5 className="card-title">Simply Data Scraping API From Etsy</h5>
            <p className="card-text text-white-50">
              Built using Node.js , Express with MySQL.
            </p>
          </div>
          <div
            className="col-3 d-flex justify-content-center align-items-center"
            style={{ color: "white" }}
          >
            <a href="https://github.com/batusan/Web-Scrape-With-Node.js" className="remove-link-style">
              <i className="fas fa-link fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="repo card mb-2 p-2 p-md-4 text-light container">
        <div className="row">
          <div className="card-body text-start col-9">
            <h5 className="card-title">Multi Thread Chat App</h5>
            <p className="card-text text-white-50">
              Multi thread chat application made with Java swing , socket
            </p>
          </div>
          <div
            className="col-3 d-flex justify-content-center align-items-center"
            style={{ color: "white" }}
          >
            <a href="https://github.com/batusan/Multi-thread-chat-app" className="remove-link-style">
              <i className="fas fa-link fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="repo card mb-2 p-2 p-md-4 text-light container">
        <div className="row">
          <div className="card-body text-start col-9">
            <h5 className="card-title">School Library Project</h5>
            <p className="card-text text-white-50">
              Console Library project , made for school assignment.
            </p>
          </div>
          <div
            className="col-3 d-flex justify-content-center align-items-center"
            style={{ color: "white" }}
          >
            <a href="https://github.com/batusan/KitapEvi.Uygulamasi" className="remove-link-style">
              <i className="fas fa-link fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="repo card text-light mt-3">
        <a href="https://github.com/batusan" className="remove-link-style">
          <div className="p-3">Visit Github For Other Projects</div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
