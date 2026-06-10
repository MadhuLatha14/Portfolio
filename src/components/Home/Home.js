import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="container home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 
                style={{ 
                  paddingBottom: 15,
                  fontWeight: 700,
                  letterSpacing: "0.5px"
                }} 
                className="heading"
              >
                Hi There!{" "}
                <span 
                  className="wave" 
                  role="img" 
                  aria-labelledby="wave"
                  style={{ animation: "waving 2.5s ease infinite" }}
                >
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ fontWeight: 500 }}>
                I'M
                <strong className="main-name" style={{ 
                  color: "#c770f0", 
                  marginLeft: "10px",
                  fontWeight: 800,
                  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.2)"
                }}> MADHU LATHA KODURU</strong>
              </h1>

              <div style={{ 
                padding: 50, 
                textAlign: "left",
                marginBottom: "15px" 
              }}>
                <Type />
              </div>
              
              <div>
                
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ 
                    maxHeight: "450px",
                    transform: "scale(1.05)",
                    transition: "all 0.5s ease-in-out"
                  }}
                />
              
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;