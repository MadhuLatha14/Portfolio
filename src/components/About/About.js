import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Leetcode from "./Leetcode";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./About.css"; // Make sure to create this file with styles below

function About() {
  return (
    <Container fluid className="about-section">
      <div className="about-background"></div>
      <Particle />
      <Container>
        <div className="section-title">
          <h1>About <span className="blue-highlight">Me</span></h1>
          <div className="title-underline"></div>
        </div>
        
        <Row className="about-wrapper">
          <Col
            md={7}
            className="about-content"
          >
            <h2 className="about-heading">
              Know Who <strong className="blue-text">I'M</strong>
            </h2>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img-container"
          >
            <div className="image-frame">
              <img src={laptopImg} alt="about" className="img-fluid floating-img" />
            </div>
          </Col>
        </Row>
        
        <div className="skills-section">
          <div className="section-title">
            <h1>Professional <span className="blue-highlight">Skillset</span></h1>
            <div className="title-underline"></div>
          </div>
          <div className="skills-container">
            <Techstack />
          </div>
        </div>

        <div className="tools-section">
          <div className="section-title">
            <h1><span className="blue-highlight">Tools</span> I Use</h1>
            <div className="title-underline"></div>
          </div>
          <div className="tools-container">
            <Toolstack />
          </div>
        </div>

        <div className="leetcode-section">
          <div className="section-title">
            <h1>Coding <span className="blue-highlight">Profile</span></h1>
            <div className="title-underline"></div>
          </div>
          <Leetcode />
        </div>
      </Container>
    </Container>
  );
}

export default About;