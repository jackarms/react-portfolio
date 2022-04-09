import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import projects from "../../Images/projects";

const Project = () => {
  return (
    <div className="project">
      <h1 className="projects-title">Projects</h1>
      {projects.map((project) => (
        <Card className="project-card">
          <CardImg
            className="project-image"
            alt="Project image"
            src={project.image}
          />
          <CardBody>
            <CardTitle tag="h5">{project.title}</CardTitle>
            <Button>Button</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Project;
