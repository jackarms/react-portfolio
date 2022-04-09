import React from "react";
import technologies from "../../Images/technologies";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardText, CardSubtitle, Row, Col } from "reactstrap";

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume">
        <CardSubtitle className="skills">Proficiencies</CardSubtitle>
        <CardText className="logos">
          <Row>
            {technologies.map((technologies) => (
              <Col>
                <img className="skillsLogo" src={technologies.src} alt="Logo" />
                <hr className="my-2" />
                <p>{technologies.skill}</p>
              </Col>
            ))}
          </Row>
        </CardText>
      </div>
    </div>
  );
};

export default Resume;
