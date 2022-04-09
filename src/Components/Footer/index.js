import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import gitHubLogo from "../../Images/github-logo.png";

function footer() {
  return (
    <div className="nav-container">
      <nav class="navbar-nav d-flex navbar-light bg-light">
        <div class="footer">
          <a href="https://github.com/jackarms">
            <img className="gitHub" src={gitHubLogo} alt="Logo" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default footer;
