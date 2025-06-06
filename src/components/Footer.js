import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.08) 100%)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(100, 255, 218, 0.1)',
        borderRadius: '20px 20px 0 0',
        padding: '3rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.03) 0%, transparent 70%)',
          animation: 'float 20s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, #64ffda, #00bcd4, #818cf8, #6366f1)',
          backgroundSize: '200% 100%',
          animation: 'gradient 3s ease infinite'
        }} />
        
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="footer-content" style={{ 
            justifyContent: 'center', 
            alignItems: 'center',
            textAlign: 'center',
            gap: '2rem'
          }}>
            <Col 
              xs={12} 
              md={6} 
              className="footer-copywright"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.15)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.3)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#fff',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #64ffda, #00bcd4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Developed by ABHAY VYAS
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Full Stack Developer & UI/UX Enthusiast
                </p>
              </div>
            </Col>
            
            <Col 
              xs={12} 
              md={6} 
              className="footer-body"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 255, 218, 0.15)',
                borderRadius: '12px',
                padding: '1.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.3)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <h4 style={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  Connect with me
                </h4>
                <ul className="footer-icons" style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  flexWrap: 'wrap'
                }}>
                  <li className="social-icons">
                    <a
                      href="https://github.com/abhay2003vyas"
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#fff',
                        fontSize: '1.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                        e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                        e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.4)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.2)';
                        e.currentTarget.style.color = '#64ffda';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/abhayvyas02/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#fff',
                        fontSize: '1.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(100, 255, 218, 0.2)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                        e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                        e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.4)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.2)';
                        e.currentTarget.style.color = '#64ffda';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.border = '1px solid rgba(100, 255, 218, 0.2)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          
          {/* Copyright section */}
          <Row 
            style={{ 
              marginTop: '2rem', 
              paddingTop: '2rem',
              borderTop: '1px solid rgba(100, 255, 218, 0.1)'
            }}
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <Col xs={12} style={{ textAlign: 'center' }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.9rem',
                margin: 0,
                fontWeight: '400'
              }}>
                © {year} Abhay Vyas. All rights reserved. Made with ❤️ and React
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .footer {
          padding: 0;
          margin-top: 4rem;
        }
        
        .footer-content {
          min-height: auto;
        }
        
        .social-icons {
          transition: all 0.3s ease;
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .footer-content {
            gap: 1.5rem !important;
          }
          
          .footer-copywright h3 {
            font-size: 1.3rem !important;
          }
          
          .footer-copywright p {
            font-size: 0.8rem !important;
          }
          
          .footer-body h4 {
            font-size: 1rem !important;
          }
          
          .footer-icons {
            gap: 1rem !important;
          }
          
          .social-icons a {
            width: 45px !important;
            height: 45px !important;
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .footer {
            margin-top: 2rem !important;
          }
          
          .footer-content > div {
            padding: 1rem !important;
          }
          
          .footer-copywright h3 {
            font-size: 1.2rem !important;
            margin-bottom: 0.3rem !important;
          }
          
          .footer-copywright p {
            font-size: 0.75rem !important;
          }
          
          .footer-body h4 {
            font-size: 0.9rem !important;
            margin-bottom: 0.8rem !important;
          }
          
          .footer-icons {
            gap: 0.8rem !important;
          }
          
          .social-icons a {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.3rem !important;
          }
        }
        
        @media (max-width: 400px) {
          .footer-content > div {
            padding: 0.8rem !important;
          }
          
          .footer-copywright h3 {
            font-size: 1.1rem !important;
          }
          
          .social-icons a {
            width: 38px !important;
            height: 38px !important;
            font-size: 1.2rem !important;
          }
        }
        
        /* Hover effects for better UX */
        .footer-copywright > div:hover,
        .footer-body > div:hover {
          cursor: default;
        }
        
        /* Accessibility improvements */
        .social-icons a:focus {
          outline: 2px solid #64ffda;
          outline-offset: 2px;
        }
        
        /* Dark theme optimization */
        @media (prefers-color-scheme: dark) {
          .footer {
            background: rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </Container>
  );
}

export default Footer;