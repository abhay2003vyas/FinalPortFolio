// EXAMPLE 
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useState } from "react";

function AboutCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(100, 255, 218, 0.2)',
        borderRadius: '24px',
        padding: '0',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? '0 25px 50px rgba(100, 255, 218, 0.15), 0 0 0 1px rgba(100, 255, 218, 0.1)' 
          : '0 8px 32px rgba(0, 0, 0, 0.12)',
      }}
      className="enhanced-about-card"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #64ffda, #818cf8, #22c55e, #64ffda)',
        backgroundSize: '300% 100%',
        animation: 'gradientFlow 4s ease infinite',
        borderRadius: '24px 24px 0 0'
      }} />
      
      {/* Floating background particles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '8px',
        height: '8px',
        background: 'rgba(100, 255, 218, 0.6)',
        borderRadius: '50%',
        animation: 'float 3s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '8%',
        width: '6px',
        height: '6px',
        background: 'rgba(129, 140, 248, 0.5)',
        borderRadius: '50%',
        animation: 'float 4s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '20%',
        width: '4px',
        height: '4px',
        background: 'rgba(34, 197, 94, 0.4)',
        borderRadius: '50%',
        animation: 'float 3.5s ease-in-out infinite'
      }} />

      <Card.Body style={{ 
        padding: 'clamp(2rem, 5vw, 3rem)',
        position: 'relative',
        zIndex: 2
      }}>
        <blockquote className="blockquote mb-0">
          {/* Main Introduction */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              marginBottom: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #64ffda, transparent)',
              animation: 'shimmer 2s ease-in-out infinite'
            }} />
            
            <p style={{ 
              textAlign: "justify",
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              lineHeight: '1.8',
              color: '#e2e8f0',
              margin: 0
            }}>
              Hi Everyone, I am{" "}
              <span style={{
                background: 'linear-gradient(135deg, #64ffda, #00bcd4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                fontSize: '1.1em'
              }}>
                Abhay Vyas
              </span>{" "}
              from{" "}
              <span style={{
                color: '#818cf8',
                fontWeight: '600',
                background: 'rgba(129, 140, 248, 0.1)',
                padding: '2px 8px',
                borderRadius: '6px'
              }}>
                Wardha, India.
              </span>
              <br />
              <br />
              I'm currently pursuing a{" "}
              <span style={{
                color: '#22c55e',
                fontWeight: '600',
                background: 'rgba(34, 197, 94, 0.1)',
                padding: '2px 8px',
                borderRadius: '6px'
              }}>
                B.Tech in Computer Engineering
              </span>{" "}
              at Bajaj Institute of Technology.
              <br />
              <br />
              I'm a{" "}
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700'
              }}>
                Full-Stack Developer
              </span>{" "}
              skilled in{" "}
              <span style={{
                color: '#ef4444',
                fontWeight: '600'
              }}>
                Java, React.js, Spring Boot,
              </span>{" "}
              and{" "}
              <span style={{
                color: '#22c55e',
                fontWeight: '600'
              }}>
                MongoDB.
              </span>
              <br />
              <br />
              I enjoy building scalable web applications, solving DSA problems, and participating in{" "}
              <span style={{
                color: '#64ffda',
                fontWeight: '600',
                textShadow: '0 0 10px rgba(100, 255, 218, 0.3)'
              }}>
                Coding Contests and hackathons.
              </span>
            </p>
          </div>

          {/* Activities Section */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              marginBottom: '2rem'
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h3 style={{
              color: '#818cf8',
              fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              What I Love Doing
            </h3>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0
            }}>
              {[
                { text: "Solving Competitive Programming Problems", color: '#64ffda', bg: 'rgba(100, 255, 218, 0.1)' },
                { text: "Working on Full-Stack Projects", color: '#818cf8', bg: 'rgba(129, 140, 248, 0.1)' },
                { text: "Exploring New Web Technologies", color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' }
              ].map((activity, index) => (
                <li 
                  key={index}
                  className="about-activity"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    margin: '0.8rem 0',
                    background: activity.bg,
                    border: `1px solid ${activity.color}30`,
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateX(8px)';
                    e.target.style.background = `${activity.color}20`;
                    e.target.style.border = `1px solid ${activity.color}60`;
                    e.target.style.boxShadow = `0 8px 25px ${activity.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.background = activity.bg;
                    e.target.style.border = `1px solid ${activity.color}30`;
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <ImPointRight 
                    style={{ 
                      marginRight: '1rem',
                      color: activity.color,
                      fontSize: '1.2rem',
                      filter: `drop-shadow(0 0 8px ${activity.color}50)`
                    }} 
                  />
                  <span style={{ color: '#e2e8f0', fontWeight: '500' }}>
                    {activity.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote Section */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(129, 140, 248, 0.1))',
              border: '1px solid rgba(100, 255, 218, 0.3)',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: 1
            }} />
            
            <p style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #64ffda, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0 0 1.5rem 0',
              position: 'relative',
              zIndex: 2,
              textShadow: '0 0 20px rgba(100, 255, 218, 0.3)'
            }}>
              "Think Twice, Code Once!"
            </p>
            
            <footer 
              className="blockquote-footer"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: '#94a3b8',
                fontWeight: '500',
                position: 'relative',
                zIndex: 2
              }}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <span style={{
                background: 'linear-gradient(135deg, #64ffda, #00bcd4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '600'
              }}>
                Abhay Vyas
              </span>
            </footer>
          </div>
        </blockquote>
      </Card.Body>

      <style jsx>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-15px) rotate(180deg); 
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .enhanced-about-card {
          cursor: pointer;
        }

        .about-activity {
          position: relative;
        }

        .about-activity::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: linear-gradient(135deg, #64ffda, #818cf8);
          border-radius: 2px;
          transition: height 0.3s ease;
        }

        .about-activity:hover::before {
          height: 60%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .enhanced-about-card {
            margin: 1rem;
          }
        }

        @media (max-width: 576px) {
          .about-activity {
            padding: 0.8rem !important;
            margin: 0.6rem 0 !important;
          }
        }

        /* Enhanced hover effects for mobile */
        @media (hover: none) {
          .about-activity:active {
            transform: translateX(4px) !important;
            background: var(--activity-hover-bg) !important;
          }
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
      `}</style>
    </div>
  );
}

export default AboutCard;