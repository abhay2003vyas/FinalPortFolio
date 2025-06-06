import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import taskManager from "../../Assets/Projects/taskManager.png";
import sihProject from "../../Assets/Projects/sihProject.png";
import suicide from "../../Assets/Projects/suicide.png";
import maintenanceSystem from "../../Assets/Projects/maintenanceSystem.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects" >
      <Particle />
      <Container>
        <h1 
          className="project-heading"
          data-aos="fade-down"
          data-aos-duration="1000"
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            fontSize: '3.5rem',
            fontWeight: '700',
            color: '#fff'
          }}
        >
          My <strong style={{ color: '#64ffda' }}>Projects</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px", gap: '2rem' }}>
          <Col 
            md={4} 
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 255, 218, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="simple-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.4)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(100, 255, 218, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #64ffda, #00bcd4)',
                borderRadius: '16px 16px 0 0'
              }} />
              <ProjectCard
                imgPath={sihProject}
                isBlog={false}
                title="WHS Beneficiary Portal – SIH 2023"
                description="A web portal developed during SIH 2023 to help WHS beneficiaries find alternate income sources. Includes survey collection, data analysis, and dynamic charts using PHP and Chart.js."
                ghLink="https://github.com/abhay2003vyas/SIH"
              />
            </div>
          </Col>

          <Col 
            md={4} 
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="simple-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.border = '1px solid rgba(129, 140, 248, 0.4)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(129, 140, 248, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.border = '1px solid rgba(129, 140, 248, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #818cf8, #6366f1)',
                borderRadius: '16px 16px 0 0'
              }} />
              <ProjectCard
                imgPath={maintenanceSystem}
                isBlog={false}
                title="Maintenance Management System"
                description="Centralized web platform to report and track campus maintenance issues. Features include QR/barcode scanning and efficient task resolution, built using PHP, Python, and MySQL."
                ghLink="https://github.com/abhay2003vyas/MP"
              />
            </div>
          </Col>

          <Col 
            md={4} 
            className="project-card"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="simple-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.border = '1px solid rgba(34, 197, 94, 0.4)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.border = '1px solid rgba(34, 197, 94, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #22c55e, #16a34a)',
                borderRadius: '16px 16px 0 0'
              }} />
              <ProjectCard
                imgPath={taskManager}
                isBlog={false}
                title="Task Manager System"
                description="A full-stack application to manage and track tasks and goals using Vue.js and Spring Boot. Designed with an interactive UI to enhance productivity and daily planning."
                ghLink="https://github.com/abhay2003vyas/Task-Manager"
              />
            </div>
          </Col>
        </Row>

        <style jsx>{`
          .simple-card {
            cursor: pointer;
          }

          .project-heading {
            position: relative;
          }

          .project-heading::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background: #64ffda;
            border-radius: 2px;
          }

          @media (max-width: 768px) {
            .project-heading {
              font-size: 2.5rem !important;
              margin-bottom: 3rem !important;
            }

            .simple-card {
              margin-bottom: 1.5rem !important;
            }
          }

          @media (max-width: 576px) {
            .simple-card {
              padding: 1.5rem !important;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Projects;
