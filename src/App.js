import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import Resume from "./Components/Resume";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
    // document.getElementById("root")
  );
}

export default App;
