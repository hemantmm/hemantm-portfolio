import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Python",
  "Bootstrap",
  "Material UI",
  "Git",
  "GitHub",
];

const strengths = [
  "Translate product ideas into responsive, polished interfaces.",
  "Write component-based React code that is easier to maintain.",
  "Care about accessibility, visual hierarchy, and performance.",
];

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container className="page-container">
        <Row className="about-panel align-items-center">
          <Col lg={7}>
            <p className="eyebrow">About Me</p>
            <h1 className="section-title">
              I enjoy building interfaces that feel sharp, useful, and dependable.
            </h1>
            <p className="aboutdetails">
              I am a self-taught frontend developer from India with hands-on
              experience building React applications, project dashboards, and
              responsive product pages. My work is guided by simple priorities:
              clear structure, polished interaction, and code that another
              developer can comfortably build on.
            </p>

            <div className="strength-list">
              {strengths.map((strength) => (
                <div className="strength-item" key={strength}>
                  <FiCheckCircle aria-hidden="true" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={5}>
            <div className="about-visual">
              <div className="webimage" aria-hidden="true"></div>
              <div className="profile-note">
                <strong>Currently focused on</strong>
                <span>React, frontend architecture, and real-world UI polish.</span>
              </div>
            </div>
          </Col>
        </Row>

        <section className="skills-section" aria-labelledby="skills-title">
          <div>
            <p className="eyebrow">Toolkit</p>
            <h2 id="skills-title">Skills I bring to the team</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Aboutpage;
