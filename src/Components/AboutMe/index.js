import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImg,
  Row,
  Col,
} from "reactstrap";
import selfie from "../../Images/selfie.png";

class AboutMe extends React.Component {
  render() {
    return (
      <div class="about-me">
        <Card>
          <CardBody className="body">
            <CardTitle className="cardTitle">Hello!</CardTitle>
            <CardSubtitle className="cardSubtitle">
              My name is John Ryan Armstrong.
            </CardSubtitle>
            <CardText className="cardText">
              Burgeoning software developer excited by the prospects of new
              challenges and new technologies.
            </CardText>
            <CardImg className="selfie" alt="selfie image" src={selfie} />
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AboutMe;
