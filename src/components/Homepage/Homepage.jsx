import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Text from "../Homepage/Text";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiLayers,
  FiMonitor,
  FiZap,
} from "react-icons/fi";

const projectHighlights = [
  {
    title: "Shop Cart",
    type: "Commerce UI",
    metric: "Cart flow",
    className: "project-chip-one",
  },
  {
    title: "Crypto Update",
    type: "Live data",
    metric: "API state",
    className: "project-chip-two",
  },
  {
    title: "Sorting Visualizer",
    type: "Learning tool",
    metric: "Algorithms",
    className: "project-chip-three",
  },
];

const workflowItems = [
  "Understand",
  "Design",
  "Build",
  "Polish",
];


function Homepage() {
  return (
    <main className="homepagebackground">
      <Container className="page-container">
        <Row className="hero-row align-items-center">
          <Col lg={7}>
            <div className="availability-badge">
              <span aria-hidden="true"></span>
              Available for Software Developer roles
            </div>
            <h1 className="hero-title">
              Frontend developer crafting interfaces that feel clear, fast, and memorable.
            </h1>
            <Text />
            <p className="hero-copy">
              I am Hemant M. I build React experiences with careful layout,
              smooth interactions, and practical product thinking so employers
              can see both design taste and engineering discipline in one place.
            </p>

            <div className="hero-actions">
              <Link className="primary-action" to="/project">
                Explore Work <FiArrowUpRight aria-hidden="true" />
              </Link>
              <Link className="secondary-action" to="/contact">
                Let us Talk
              </Link>
              <a
                className="icon-action"
                href="https://github.com/hemantmm"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <AiFillGithub aria-hidden="true" />
              </a>
              <a
                className="icon-action"
                href="https://www.linkedin.com/in/hemant-mehta-97b40b220/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </div>

            <div className="workflow-strip" aria-label="My development workflow">
              {workflowItems.map((item, index) => (
                <div className="workflow-step" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={5}>
            <section className="hero-lab" aria-label="Interactive portfolio preview">
              <div className="lab-window">
                <div className="lab-topbar">
                  <div className="window-dots" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="lab-title">Hemant.dev/workspace</span>
                </div>

                <div className="lab-body">
                  <div className="profile-orbit">
                    <div className="profile-core">
                      <FiMonitor aria-hidden="true" />
                      <strong>React UI</strong>
                      <span>Production-ready interfaces</span>
                    </div>
                    <div className="orbit-ring orbit-ring-one" aria-hidden="true"></div>
                    <div className="orbit-ring orbit-ring-two" aria-hidden="true"></div>
                  </div>

                  <div className="lab-stack">
                    <div className="stack-card active">
                      <FiCode aria-hidden="true" />
                      <span>Components</span>
                      <strong>Reusable</strong>
                    </div>
                    <div className="stack-card">
                      <FiLayers aria-hidden="true" />
                      <span>Layouts</span>
                      <strong>Responsive</strong>
                    </div>
                    <div className="stack-card">
                      <FiDatabase aria-hidden="true" />
                      <span>Data</span>
                      <strong>API-aware</strong>
                    </div>
                  </div>
                </div>

                <div className="project-chip-grid">
                  {projectHighlights.map((project) => (
                    <Link
                      className={`project-chip ${project.className}`}
                      to="/project"
                      key={project.title}
                    >
                      <span>{project.type}</span>
                      <strong>{project.title}</strong>
                      <small>{project.metric}</small>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="floating-proof proof-one">
                <FiCheckCircle aria-hidden="true" />
                <span>Clean code</span>
              </div>
              <div className="floating-proof proof-two">
                <FiZap aria-hidden="true" />
                <span>Fast polish</span>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Homepage;
