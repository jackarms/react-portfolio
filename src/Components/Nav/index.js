import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container1">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            John Ryan Armstrong
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="navBar">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav d-flex flex-row-reverse">
                <NavLink className="nav-link" to="/">
                  AboutMe
                </NavLink>
                <a class="nav-link" href="/projects">
                  Portfolio
                </a>
                <a class="nav-link" href="/contact">
                  Contact
                </a>
                <a class="nav-link" href="/resume">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
