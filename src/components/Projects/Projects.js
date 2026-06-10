import React, { useState } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Using existing placeholders or generic ones. Replace with actual project screenshots if available.
import prescriptionImg from "../../Assets/Projects/image.png";
import summarizerImg from "../../Assets/Projects/blog.jpg";
import synergyKartImg from "../../Assets/Projects/synergykart.jpeg";
// Add more imports for additional projects

function Projects() {
  const [filter, setFilter] = useState("all");
  
  const projects = [
  {
    id: 1,
    imgPath: synergyKartImg,
    isBlog: false,
    title: "SynergyKart – AI- Powered E-commerce Search & Recommendation System",
    description:
      "Developed a smart full-stack e-commerce platform using React (TypeScript), Node.js, MongoDB, and Elasticsearch, featuring intelligent search with fuzzy matching, BM25-based ranking, semantic query interpretation, and dynamic auto-suggestions. Implemented efficient search and ranking algorithms, built scalable APIs.",
    ghLink: "https://github.com/MadhuLatha14/SynergyKart",
    demoLink: "https://www.youtube.com/watch?v=nVe9cf89gKg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Elasticsearch",
      "BM25 Algorithm",
      "Semantic Search",
      "REST APIs",
    ],
    category: ["web", "ai"],  
  },

  {
    id: 2,
    imgPath: prescriptionImg,
    isBlog: false,
    title: "Digital Prescription Generator",
    description:
      "Built a secure digital prescription system using the MERN stack.Implemented authentication, validated APIs, and real-time interaction between doctors and patients.Enabled PDF generation for efficient record-keeping. Automated doctor-patient workflows with secure prescription management and improving accessibility.",
    ghLink: "https://github.com/MadhuLatha14/MERN",
    demoLink: "https://mern-1-4t5e.onrender.com/",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PDF Generation",
    ],
    category: ["web"],
  },

  {
    id: 3,
    imgPath: summarizerImg,
    isBlog: false,
    title: "Exam-wise Summarization Tool",
    description:
      "Built a machine learning-based text summarization tool that scrapes exam-related data to generate concise summaries. Leveraged Python, SpaCy, and databases for efficient data storage and retrieval. Optimized runtime and memory usage for efficient deployment, ensuring a scalable solution.",
    ghLink:
      "https://github.com/MadhuLatha14/examwise_summarisation_proj",
    demoLink: null,
    technologies: [
      "Python",
      "Machine Learning",
      "SpaCy",
      "NLP",
      "Web Scraping",
    ],
    category: ["ai"],
  },
];

 const filteredProjects =
  filter === "all"
    ? projects
    : projects.filter((project) =>
        project.category.includes(filter)
      );
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="fade-in">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }} className="mb-4">
            Here are a few projects I've worked on recently. Each demonstrates my technical abilities and problem-solving approach.
          </p>

          {/* Filter buttons */}
          <div className="d-flex justify-content-center mb-5">
            <Button 
              variant={filter === "all" ? "primary" : "outline-primary"} 
              onClick={() => setFilter("all")}
              className="mx-2"
            >
              All Projects
            </Button>
            <Button 
              variant={filter === "web" ? "primary" : "outline-primary"} 
              onClick={() => setFilter("web")}
              className="mx-2"
            >
              Web Development
            </Button>
            <Button 
              variant={filter === "ai" ? "primary" : "outline-primary"} 
              onClick={() => setFilter("ai")}
              className="mx-2"
            >
              AI/ML
            </Button>
          </div>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {filteredProjects.map((project) => (
              <Col md={4} className="project-card" key={project.id}>
                <div className="project-card-inner">
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={project.isBlog}
                    title={project.title}
                    description={project.description}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink}
                  >
                    {/* Additional content to be added inside ProjectCard */}
                    <div className="mt-3">
                      <h5>Technologies Used:</h5>
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <Badge bg="light" text="dark" key={index} className="tech-badge">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3 d-flex justify-content-between">
                      {project.ghLink && project.ghLink !== "#" && (
                        <Button 
                          variant="primary" 
                          href={project.ghLink} 
                          target="_blank" 
                          size="sm"
                          className="me-2"
                        >
                          <FaGithub /> Code
                        </Button>
                      )}
                      {project.demoLink && project.demoLink !== "#" && (
                        <Button 
                          variant="success" 
                          href={project.demoLink} 
                          target="_blank" 
                          size="sm"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </Button>
                      )}
                    </div>
                  </ProjectCard>
                </div>
              </Col>
            ))}
          </Row>

          {/* Call to action */}
          <div className="text-center mt-5">
            <p style={{ color: "white" }}>Interested in seeing more of my work?</p>
            <Button 
              variant="outline-light" 
              href="https://github.com/MadhuLatha14" 
              target="_blank"
              size="lg"
              className="mt-2"
            >
              <FaGithub className="me-2" /> View More on GitHub
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
}

// Add these CSS rules to your project's CSS file
/*
.project-card-inner {
  transition: transform 0.3s ease-in-out;
  height: 100%;
}

.project-card-inner:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.tech-badge {
  margin-right: 5px;
  margin-bottom: 5px;
  font-weight: 500;
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
*/

export default Projects;