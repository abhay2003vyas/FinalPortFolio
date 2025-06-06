import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Container fluid className="about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <Particle />
      
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 4s ease-in-out infinite',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '8%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse 3s ease-in-out infinite reverse',
        zIndex: 1
      }} />

      <Container style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero Section */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 255, 218, 0.1)',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '4rem',
            position: 'relative',
            overflow: 'hidden'
          }}
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '3px',
            background: 'linear-gradient(90deg, #64ffda, #818cf8, #22c55e, #64ffda)',
            backgroundSize: '400% 100%',
            animation: 'gradientFlow 6s ease infinite',
            borderRadius: '24px 24px 0 0'
          }} />
          
          <Row className="align-items-center" style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '3rem'
                }}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h1 style={{ 
                  fontSize: "clamp(2rem, 5vw, 3.2em)",
                  paddingBottom: "20px",
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #64ffda, #ffffff, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  textShadow: '0 0 30px rgba(100, 255, 218, 0.3)'
                }}>
                  Know Who{" "}
                  <strong style={{
                    background: 'linear-gradient(135deg, #64ffda, #00bcd4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative'
                  }}>
                    I'M
                    <span style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #64ffda, #00bcd4)',
                      borderRadius: '2px',
                      boxShadow: '0 0 10px rgba(100, 255, 218, 0.5)'
                    }} />
                  </strong>
                </h1>
                
                {/* Decorative elements around title */}
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  left: '10%',
                  width: '20px',
                  height: '20px',
                  border: '2px solid rgba(100, 255, 218, 0.3)',
                  borderRadius: '50%',
                  animation: 'spin 8s linear infinite'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '30%',
                  right: '15%',
                  width: '15px',
                  height: '15px',
                  background: 'rgba(129, 140, 248, 0.4)',
                  borderRadius: '2px',
                  animation: 'float 3s ease-in-out infinite',
                  transform: 'rotate(45deg)'
                }} />
              </div>
              
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <Aboutcard />
              </div>
            </Col>
            
            <Col
              md={5}
              style={{ 
                paddingTop: "clamp(60px, 12vw, 120px)", 
                paddingBottom: "50px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="about-img"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div
                style={{
                  position: 'relative',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(129, 140, 248, 0.2)',
                  borderRadius: '24px',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  transition: 'all 0.4s ease',
                  overflow: 'hidden',
                  maxWidth: '100%'
                }}
                className="laptop-container"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.border = '1px solid rgba(129, 140, 248, 0.4)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(129, 140, 248, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.border = '1px solid rgba(129, 140, 248, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Animated border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #818cf8, #6366f1, #818cf8)',
                  backgroundSize: '200% 100%',
                  animation: 'gradientFlow 3s ease infinite',
                  borderRadius: '24px 24px 0 0'
                }} />
                
                {/* Floating elements around laptop */}
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-10px',
                  width: '12px',
                  height: '12px',
                  background: 'rgba(100, 255, 218, 0.6)',
                  borderRadius: '50%',
                  animation: 'float 2.5s ease-in-out infinite'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '-8px',
                  width: '8px',
                  height: '8px',
                  background: 'rgba(34, 197, 94, 0.5)',
                  borderRadius: '50%',
                  animation: 'float 3.5s ease-in-out infinite reverse'
                }} />
                
                <img 
                  src={laptopImg} 
                  alt="about" 
                  className="img-fluid"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    filter: 'drop-shadow(0 10px 30px rgba(129, 140, 248, 0.3))',
                    transition: 'filter 0.3s ease'
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>

        {/* Skills Section */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <h1 
            className="project-heading"
            style={{
              fontSize: "clamp(2rem, 5vw, 3em)",
              fontWeight: '800',
              background: 'linear-gradient(135deg, #22c55e, #ffffff, #64ffda)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              marginBottom: '4rem',
              textShadow: '0 0 30px rgba(34, 197, 94, 0.3)'
            }}
          >
            Professional{" "}
            <strong style={{
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Skillset
              <span style={{
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #22c55e, #16a34a)',
                borderRadius: '2px',
                boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)'
              }} />
            </strong>
          </h1>
          
          {/* Decorative elements around skills title */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            width: '25px',
            height: '25px',
            border: '3px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '50%',
            animation: 'spin 6s linear infinite reverse'
          }} />
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '8%',
            width: '18px',
            height: '18px',
            background: 'rgba(100, 255, 218, 0.4)',
            borderRadius: '3px',
            animation: 'float 4s ease-in-out infinite',
            transform: 'rotate(45deg)'
          }} />
        </div>

        <div 
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="700"
        >
          <Techstack />
        </div>

        {/* Additional decorative section */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.5), transparent)',
            animation: 'shimmer 3s ease-in-out infinite'
          }} />
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#94a3b8',
            margin: 0,
            fontStyle: 'italic'
          }}>
            "Continuously learning and evolving in the world of technology"
          </p>
        </div>
      </Container>

      <style jsx>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-12px) rotate(180deg); 
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .laptop-container {
          cursor: pointer;
        }

        .about-img {
          position: relative;
        }

        .project-heading {
          position: relative;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-img {
            padding-top: 2rem !important;
            margin-top: 2rem;
          }

          .laptop-container {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 576px) {
          .laptop-container {
            padding: 1rem !important;
          }
        }

        /* Enhanced hover effects */
        .laptop-container:hover img {
          filter: drop-shadow(0 15px 40px rgba(129, 140, 248, 0.4)) !important;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom selection */
        ::selection {
          background: rgba(100, 255, 218, 0.3);
          color: #fff;
        }

        ::-moz-selection {
          background: rgba(100, 255, 218, 0.3);
          color: #fff;
        }

        /* Performance optimizations */
        * {
          backface-visibility: hidden;
          perspective: 1000;
        }
      `}</style>
    </Container>
  );
}

export default About;