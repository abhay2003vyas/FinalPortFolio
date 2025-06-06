import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import Contact from "../Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section>
      {/* Home Section */}
      <Container fluid className="home-section" id="home" style={{ 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Particle />
        
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 3s ease-in-out infinite reverse',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 5s ease-in-out infinite',
          zIndex: 1
        }} />

        {/* Floating Geometric Shapes */}
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '20%',
          width: '20px',
          height: '20px',
          border: '2px solid rgba(100, 255, 218, 0.4)',
          borderRadius: '50%',
          animation: 'spin 8s linear infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '40%',
          left: '12%',
          width: '15px',
          height: '15px',
          background: 'rgba(129, 140, 248, 0.5)',
          borderRadius: '3px',
          animation: 'float 3s ease-in-out infinite',
          transform: 'rotate(45deg)'
        }} />
        <div style={{
          position: 'absolute',
          top: '70%',
          right: '25%',
          width: '12px',
          height: '12px',
          background: 'rgba(34, 197, 94, 0.4)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse'
        }} />

        <Container className="home-content" style={{ position: 'relative', zIndex: 2 }}>
          {/* Main Hero Content */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(100, 255, 218, 0.15)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 5vw, 4rem)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
            }}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            {/* Animated top border */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #64ffda, #818cf8, #22c55e, #64ffda)',
              backgroundSize: '400% 100%',
              animation: 'gradientFlow 6s ease infinite',
              borderRadius: '28px 28px 0 0'
            }} />

            <Row className="align-items-center">
              <Col md={7} className="home-header">
                {/* Greeting */}
                <div
                  style={{
                    marginBottom: '2rem',
                    position: 'relative'
                  }}
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h1
                    style={{ 
                      paddingBottom: 15,
                      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                      fontWeight: '700',
                      color: '#94a3b8',
                      margin: 0
                    }}
                    className="heading"
                  >
                    Hi There!{" "}
                    <span 
                      className="wave" 
                      role="img" 
                      aria-labelledby="wave"
                      style={{
                        display: 'inline-block',
                        animation: 'wave 2s ease-in-out infinite',
                        transformOrigin: '70% 70%',
                        fontSize: '1.2em'
                      }}
                    >
                      👋🏻
                    </span>
                  </h1>
                </div>

                {/* Main Name */}
                <div
                  style={{
                    marginBottom: '3rem',
                    position: 'relative'
                  }}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <h1
                    className="heading-name"
                    style={{
                      fontSize: "clamp(2.2rem, 6vw, 4rem)",
                      fontWeight: '900',
                      lineHeight: '1.1',
                      margin: 0
                    }}
                  >
                    <span style={{
                      color: '#e2e8f0',
                      display: 'block',
                      marginBottom: '0.5rem'
                    }}>
                      I'M
                    </span>
                    <strong 
                      className="main-name"
                      style={{
                        background: 'linear-gradient(135deg, #64ffda 0%, #ffffff 50%, #818cf8 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        position: 'relative',
                        display: 'block',
                        textShadow: '0 0 40px rgba(100, 255, 218, 0.3)'
                      }}
                    >
                      ABHAY VYAS
                      {/* Animated underline */}
                      <span style={{
                        position: 'absolute',
                        bottom: '-12px',
                        left: 0,
                        width: '0%',
                        height: '4px',
                        background: 'linear-gradient(90deg, #64ffda, #818cf8)',
                        borderRadius: '2px',
                        boxShadow: '0 0 20px rgba(100, 255, 218, 0.6)',
                        animation: 'expandWidth 2s ease 1s forwards'
                      }} />
                    </strong>
                  </h1>
                </div>

                {/* Typewriter Section */}
                <div
                  style={{ 
                    padding: 'clamp(1rem, 3vw, 2rem) 0',
                    textAlign: "left",
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(129, 140, 248, 0.15)',
                    borderRadius: '18px',
                    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  {/* Subtle animated border */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.5), transparent)',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }} />
                  
                  <Type />
                  
                  {/* Small decorative elements */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '8px',
                    height: '8px',
                    background: 'rgba(100, 255, 218, 0.6)',
                    borderRadius: '50%',
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                </div>
              </Col>

              {/* Hero Image */}
              <Col
                md={5}
                style={{ 
                  paddingBottom: 20,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 'clamp(2rem, 5vw, 0)'
                }}
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div
                  style={{
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                    borderRadius: '24px',
                    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                    transition: 'all 0.4s ease',
                    overflow: 'hidden',
                    maxWidth: '100%'
                  }}
                  className="hero-image-container"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                    e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.4)';
                    e.currentTarget.style.boxShadow = '0 30px 80px rgba(100, 255, 218, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.2)';
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
                    background: 'linear-gradient(90deg, #64ffda, #22c55e, #64ffda)',
                    backgroundSize: '200% 100%',
                    animation: 'gradientFlow 4s ease infinite',
                    borderRadius: '24px 24px 0 0'
                  }} />
                  
                  {/* Floating elements around image */}
                  <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '-15px',
                    width: '14px',
                    height: '14px',
                    background: 'rgba(100, 255, 218, 0.7)',
                    borderRadius: '50%',
                    animation: 'float 3s ease-in-out infinite'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '-12px',
                    width: '10px',
                    height: '10px',
                    background: 'rgba(34, 197, 94, 0.6)',
                    borderRadius: '50%',
                    animation: 'float 2.5s ease-in-out infinite reverse'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-8px',
                    width: '8px',
                    height: '8px',
                    background: 'rgba(129, 140, 248, 0.5)',
                    borderRadius: '2px',
                    animation: 'spin 4s linear infinite',
                    transform: 'rotate(45deg)'
                  }} />
                  
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{
                      maxHeight: "450px",
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      filter: 'drop-shadow(0 15px 40px rgba(100, 255, 218, 0.3))',
                      transition: 'filter 0.3s ease'
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>

          {/* Scroll Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#64ffda',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span style={{ marginBottom: '0.5rem' }}>Scroll Down</span>
            <div style={{
              width: '2px',
              height: '30px',
              background: 'linear-gradient(to bottom, #64ffda, transparent)',
              borderRadius: '1px',
              animation: 'scrollIndicator 2s ease-in-out infinite'
            }} />
          </div>
        </Container>
      </Container>

      {/* Enhanced CSS Styles */}
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
            transform: translateY(-15px) rotate(180deg); 
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

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        @keyframes expandWidth {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes scrollIndicator {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        .hero-image-container {
          cursor: pointer;
        }

        .hero-image-container:hover img {
          filter: drop-shadow(0 20px 50px rgba(100, 255, 218, 0.4)) !important;
        }

        .cta-button-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button-primary:hover::before {
          left: 100%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .home-header {
            text-align: center !important;
            margin-bottom: 2rem;
          }

          .hero-image-container {
            margin-top: 2rem;
          }

          .heading-name {
            font-size: clamp(1.8rem, 8vw, 3rem) !important;
          }

          .cta-button-primary,
          .cta-button-secondary {
            width: 100%;
            margin-bottom: 0.5rem;
          }
        }

        @media (max-width: 576px) {
          .hero-image-container {
            padding: 1rem !important;
          }

          .home-content > div {
            padding: 1.5rem !important;
          }
        }

        /* Performance optimizations */
        * {
          backface-visibility: hidden;
          perspective: 1000;
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

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Home2 />
      <About />
      <Projects />
      <ResumeNew />
      <Contact />
    </section>
  );
}

export default Home;