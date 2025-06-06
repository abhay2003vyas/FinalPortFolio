import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Home2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                borderRadius: '20px',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              className="intro-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.4)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(100, 255, 218, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {/* Animated gradient border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(90deg, #64ffda, #00bcd4, #64ffda)',
                backgroundSize: '200% 100%',
                animation: 'gradient 3s ease infinite',
                borderRadius: '20px 20px 0 0'
              }} />
              
              {/* Floating particles effect */}
              <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '6px',
                height: '6px',
                background: '#64ffda',
                borderRadius: '50%',
                opacity: 0.6,
                animation: 'float 3s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '15%',
                width: '4px',
                height: '4px',
                background: '#818cf8',
                borderRadius: '50%',
                opacity: 0.4,
                animation: 'float 4s ease-in-out infinite reverse'
              }} />

              <h1
                style={{ 
                  fontSize: "clamp(2rem, 5vw, 2.8rem)",
                  fontWeight: '700',
                  marginBottom: '2rem',
                  background: 'linear-gradient(135deg, #64ffda, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative'
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                LET ME <span style={{ color: '#64ffda' }}>INTRODUCE</span> MYSELF
              </h1>
              
              <p
                className="home-about-body"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  lineHeight: '1.8',
                  color: '#e2e8f0',
                  marginBottom: '2rem'
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                I'm deeply passionate about
                <i>
                  <b style={{ 
                    color: '#64ffda',
                    background: 'rgba(100, 255, 218, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    margin: '0 4px'
                  }}> Data Structures, Algorithms,</b>
                </i>
                and solving complex problems.
                <br />
                <br />
                With over <b style={{ 
                  color: '#64ffda',
                  background: 'rgba(100, 255, 218, 0.1)',
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}>500+ DSA problems</b> solved on
                platforms like
                <i>
                  <b style={{ color: '#64ffda', margin: '0 4px' }}> LeetCode</b>,
                  <b style={{ color: '#64ffda', margin: '0 4px' }}>CodeChef</b> and{" "}
                  <b style={{ color: '#64ffda', margin: '0 4px' }}>GFG</b>,
                </i>
                I constantly challenge myself to think critically and optimize
                solutions.
                <br />
                <br />I also build real-world web applications using
                <b style={{ 
                  color: '#818cf8',
                  background: 'rgba(129, 140, 248, 0.1)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  margin: '0 4px'
                }}> React.js, Vue.js, Node.js,</b> and{" "}
                <b style={{ 
                  color: '#22c55e',
                  background: 'rgba(34, 197, 94, 0.1)',
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}>MongoDB/MySQL</b>, turning ideas into
                efficient, scalable products.
              </p>

              {/* Skills badges */}
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginTop: '2rem'
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                {['React.js', 'Vue.js', 'Node.js', 'MongoDB', 'DSA'].map((skill, index) => (
                  <span
                    key={skill}
                    style={{
                      background: `linear-gradient(135deg, ${['#64ffda', '#818cf8', '#22c55e', '#f59e0b', '#ef4444'][index]}, ${['#00bcd4', '#6366f1', '#16a34a', '#d97706', '#dc2626'][index]})`,
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      boxShadow: `0 4px 15px rgba(${['100, 255, 218', '129, 140, 248', '34, 197, 94', '245, 158, 11', '239, 68, 68'][index]}, 0.3)`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Col>
          
          <Col
            md={4}
            className="myAvtar"
            style={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 'clamp(-20px, -5vw, -75px)'
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(129, 140, 248, 0.2)',
                borderRadius: '50%',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              className="avatar-container"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.border = '1px solid rgba(129, 140, 248, 0.4)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(129, 140, 248, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.border = '1px solid rgba(129, 140, 248, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Rotating gradient border */}
              <div style={{
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background: 'linear-gradient(45deg, #64ffda, #818cf8, #22c55e, #64ffda)',
                borderRadius: '50%',
                zIndex: -1,
                animation: 'rotate 4s linear infinite'
              }} />
              
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <img 
                  src={myImg} 
                  className="img-fluid" 
                  alt="avatar"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '50%',
                    filter: 'drop-shadow(0 10px 30px rgba(100, 255, 218, 0.3))'
                  }}
                />
              </Tilt>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .intro-card {
          cursor: pointer;
        }

        .avatar-container {
          cursor: pointer;
        }

        .home-about-body {
          text-align: justify;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .intro-card {
            padding: 2rem !important;
            margin-bottom: 2rem;
          }
          
          .myAvtar {
            margin-top: 0 !important;
            margin-bottom: 2rem;
          }
          
          .avatar-container {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 576px) {
          .intro-card {
            padding: 1.5rem !important;
          }
          
          .avatar-container {
            padding: 1rem !important;
          }
        }

        /* Enhanced hover effects */
        .intro-card:hover .floating-particle {
          animation-duration: 2s;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #64ffda, #818cf8);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #00bcd4, #6366f1);
        }
      `}</style>
    </Container>
  );
}

export default Home2;