import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Madhu Latha Koduru </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br /> I am a Computer Science student pursuing B.Tech at Prasad V Potluri Siddhartha Institute of Technology.
            <br />
            I have completed an AI/ML Internship with Eduskills (Google virtual).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Leading initiatives (Coordinator for Freshman Engineering in the Innovation Council)
            </li>
            <li className="about-activity">
              <ImPointRight /> Public Speaking & Debating
            </li>
            <li className="about-activity">
              <ImPointRight /> Event Management & Organization
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Madhu Latha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
