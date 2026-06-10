import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillPhone,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Madhu Latha Koduru</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MLK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-links">
            <li className="social-icons">
              <a
                href="https://github.com/MadhuLatha14"
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/madhu-latha-koduru-156412255"
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+917396569441"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:madhulatha18koduru@gmail.com"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;