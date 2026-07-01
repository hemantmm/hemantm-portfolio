import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container className="page-container contact-panel">
        <p className="eyebrow">Get In Touch</p>
        <h1 className="contacthead">Let us build something useful together.</h1>
        <p className="contactpara">
          I am open to frontend developer opportunities where I can contribute to
          clean React interfaces, responsive design, and product experiences that
          feel good from the first click.
        </p>
        <div className="contact-actions">
          <a
            className="contactbtn"
            href="mailto:hemant29mehta@gmail.com"
          >
            <FiMail aria-hidden="true" /> Email Me
          </a>
          <a
            className="contactbtn"
            href="https://www.linkedin.com/in/hemant-mehta-97b40b220/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn aria-hidden="true" /> LinkedIn
          </a>
          <a
            className="contactbtn"
            href="https://github.com/hemantmm"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub aria-hidden="true" /> GitHub
          </a>
        </div>
        <p className="copyright">
          Designed and built by <span>Hemant M</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
