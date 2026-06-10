import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // Primary blue colors
  const lightBlue = "#42a5f5";

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navbarStyle = {
    padding: "0.8rem 1.5rem",
    transition: "all 0.3s ease-out",
    backgroundColor: navColour ? "rgba(13, 71, 161, 0.9)" : "transparent",
    backdropFilter: navColour ? "blur(10px)" : "none",
    boxShadow: navColour ? "0 8px 20px rgba(25, 118, 210, 0.2)" : "none",
  };


  const togglerLineStyle = {
    display: "block",
    width: "100%",
    height: "3px",
    marginBottom: "5px",
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "3px",
    transformOrigin: "center",
    transition: "all 0.3s ease-in-out",
  };

  const navLinkStyle = {
    color: "#f5f5f5",
    fontWeight: "500",
    padding: "1rem 1.2rem",
    fontSize: "1.1rem",
    transition: "all 0.3s ease-in-out",
    borderBottom: "2px solid transparent",
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: lightBlue,
    borderBottom: `2px solid ${lightBlue}`,
  };


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      style={navbarStyle}
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          
          <span style={{
            marginLeft: "10px",
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#f5f5f5",
            textShadow: `0 2px 5px rgba(13, 71, 161, 0.3)`,
            background: `linear-gradient(45deg, #f5f5f5, ${lightBlue})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Portfolio
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{background: "transparent", border: "none"}}
        >
          <div style={{position: "relative", width: "30px", height: "24px"}}>
            <span style={{
              ...togglerLineStyle,
              transform: expand ? "rotate(45deg) translate(5px, 6px)" : "none"
            }}></span>
            <span style={{
              ...togglerLineStyle,
              opacity: expand ? 0 : 1
            }}></span>
            <span style={{
              ...togglerLineStyle,
              transform: expand ? "rotate(-45deg) translate(5px, -6px)" : "none",
              marginBottom: 0
            }}></span>
          </div>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
                className="nav-link-custom"
              >
                <AiOutlineHome style={{ marginBottom: "2px", fontSize: "1.2rem", color: lightBlue }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
                className="nav-link-custom"
              >
                <AiOutlineUser style={{ marginBottom: "2px", fontSize: "1.2rem", color: lightBlue }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
                className="nav-link-custom"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", fontSize: "1.2rem", color: lightBlue }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                style={navLinkStyle}
                activeStyle={activeNavLinkStyle}
                className="nav-link-custom"
              >
                <CgFileDocument style={{ marginBottom: "2px", fontSize: "1.2rem", color: lightBlue }} /> Resume
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <style>
        {`
          .nav-link-custom:hover {
            color: ${lightBlue} !important;
            transform: translateY(-2px);
          }
          
          @media (max-width: 767px) {
            .navbar-nav {
              padding-top: 15px;
              padding-bottom: 10px;
              background-color: rgba(13, 71, 161, 0.95);
              border-radius: 10px;
              margin-top: 10px;
              box-shadow: 0 8px 30px rgba(33, 150, 243, 0.3);
            }
            
            .nav-link-custom {
              padding: 0.7rem 1rem !important;
              text-align: center;
              border-bottom: 1px solid rgba(66, 165, 245, 0.2);
            }
            
            .nav-link-custom:last-child {
              border-bottom: none;
            }
            
            .fork-btn {
              text-align: center;
              margin: 15px auto;
              display: block;
            }
          }
        `}
      </style>
    </Navbar>
  );
}

export default NavBar;