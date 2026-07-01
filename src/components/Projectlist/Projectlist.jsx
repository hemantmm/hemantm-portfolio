import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from "../../Assets/blogPostImage.png";
import logo2 from "../../Assets/shopCartImage.png";
import logo3 from "../../Assets/cryptoUpdateImage.png";

const projects = [
  {
    imgPath: logo2,
    title: "Shop Cart",
    category: "E-commerce",
    description:
      "A responsive shopping experience built around product discovery, cart flow, and a clean purchase journey for customers ordering across regions.",
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    vdLink: "https://shop-cart-fawn.vercel.app/",
    ghLink: "https://github.com/hemantmm/ShopCart",
  },
  {
    imgPath: logo3,
    title: "Crypto Update",
    category: "Market data",
    description:
      "A cryptocurrency dashboard that helps users search coins, compare live market information, and scan price movement through a focused interface.",
    tech: ["React", "API", "Bootstrap", "Charts"],
    vdLink: "https://crypto-market-rp67.vercel.app/",
    ghLink: "https://github.com/hemantmm/CryptoMarket",
  },
  {
    imgPath: logo1,
    title: "Sorting Visualizer",
    category: "Education tool",
    description:
      "An interactive algorithm visualizer with speed controls and clear animation states, designed to make sorting behavior easier to understand.",
    tech: ["React", "Algorithms", "UI State", "CSS"],
    vdLink: "https://sorting-visualizer-hemantmms-projects.vercel.app/",
    ghLink: "https://github.com/hemantmm/sorting-visualizer",
  },
];

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container className="page-container project-section">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h1 className="section-title">Projects that show product thinking and frontend craft.</h1>
          <p>
            Each project is deployed, inspectable, and framed around the kind of
            practical UI decisions employers care about: clarity, responsiveness,
            state, data, and interaction.
          </p>
        </div>
        <Row className="project-grid">
          {projects.map((project) => (
            <Col lg={4} md={6} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
          </Row>
      </Container>
    </div>
  );
}

export default Projectlist;
