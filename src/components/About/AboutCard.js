import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Madhu Latha Koduru</span>
          {" "}from Andhra Pradesh, India.
          <br />
          I am a Computer Science graduate with a B.Tech degree from{" "}
          <span className="purple">
            Prasad V Potluri Siddhartha Institute of Technology (PVPSIT)
          </span>
          .
          <br />
          <br />
          I also served as a{" "}
          <span className="purple">
            Teaching Assistant for Beginner-Level DSA and Interview Preparation
          </span>
          , mentoring students in foundational Data Structures & Algorithms,
          problem-solving techniques, doubt clarification, and mock interview
          sessions.
          <br />
        </p>

        <p style={{ textAlign: "justify" }}>
          Apart from coding, some other activities that I enjoy:
        </p>

        <ul>
  <li className="about-activity">
    🚀 Leadership, Student Mentorship & Community Building
  </li>

  <li className="about-activity">
    🎤 Public Speaking, Technical Presentations & Knowledge Sharing
  </li>

  <li className="about-activity">
    💡 Hackathons, Innovation Challenges & Event Organization
  </li>
</ul>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "rgb(155, 126, 172)" }}>
            "Strive to build things that make a difference!"
          </p>

          <footer className="blockquote-footer">
            Madhu Latha Koduru
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
