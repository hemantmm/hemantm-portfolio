import React from "react";
import { Card } from "react-bootstrap";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={`${props.title} preview`} />
      <Card.Body>
        <div className="project-card-header">
          <Card.Title>{props.title}</Card.Title>
          <span>{props.category}</span>
        </div>
        <Card.Text>{props.description}</Card.Text>
        <div className="project-tech">
          {props.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-actions">
          <a className="viewbtn" href={props.vdLink} target="_blank" rel="noreferrer">
            Live Demo
            <BsBoxArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="viewbtn"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
          >
            Code
            <AiFillGithub aria-hidden="true" />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
