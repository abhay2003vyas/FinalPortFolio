import React, { useState, useEffect } from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiPhp,
} from "react-icons/di";
import {
  SiMysql,
  SiSpringboot,
  SiExpress,
  SiVisualstudiocode,
  SiGithub,
  SiVuedotjs,
} from "react-icons/si";

function SectionHeading({ title }) {
  return (
    <div className="section-heading" style={{ 
      marginBottom: "3rem",
      textAlign: "center",
      position: "relative"
    }}>
      <h2 style={{
        fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
        fontWeight: "700",
        background: "linear-gradient(135deg, #64ffda, #818cf8, #22c55e)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "1rem",
        position: "relative",
        zIndex: 2
      }}>
        {title}
      </h2>
      <div style={{
        width: "80px",
        height: "4px",
        background: "linear-gradient(90deg, #64ffda, #818cf8)",
        margin: "0 auto",
        borderRadius: "2px",
        boxShadow: "0 0 20px rgba(100, 255, 218, 0.5)"
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 1,
        pointerEvents: "none"
      }} />
    </div>
  );
}

function TechIcon({ icon: Icon, title, color, delay = 0, isText = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const iconStyle = {
    fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
    color: color,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: isHovered 
      ? "scale(1.2) translateY(-8px) rotate(5deg)" 
      : "scale(1) translateY(0) rotate(0deg)",
    filter: isHovered 
      ? `drop-shadow(0 15px 35px ${color}40) brightness(1.2)` 
      : `drop-shadow(0 8px 25px ${color}20)`,
    textShadow: isHovered ? `0 0 30px ${color}` : "none"
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "clamp(1rem, 3vw, 1.5rem)",
    margin: "clamp(0.5rem, 2vw, 1rem)",
    background: isHovered 
      ? `linear-gradient(135deg, ${color}15, rgba(255, 255, 255, 0.1))` 
      : "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: isHovered 
      ? `2px solid ${color}60` 
      : `1px solid ${color}20`,
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: isVisible 
      ? (isHovered ? "translateY(-12px) scale(1.05)" : "translateY(0) scale(1)")
      : "translateY(30px) scale(0.8)",
    opacity: isVisible ? 1 : 0,
    boxShadow: isHovered 
      ? `0 25px 50px ${color}30, 0 0 0 1px ${color}20, inset 0 1px 0 rgba(255, 255, 255, 0.1)` 
      : "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    position: "relative",
    overflow: "hidden",
    minHeight: "120px",
    minWidth: "120px"
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={title}
    >
      {/* Animated background particles */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "20%",
        width: "4px",
        height: "4px",
        background: color,
        borderRadius: "50%",
        opacity: isHovered ? 0.8 : 0.3,
        animation: isHovered ? "float 2s ease-in-out infinite" : "none",
        transition: "opacity 0.3s ease"
      }} />
      <div style={{
        position: "absolute",
        bottom: "25%",
        left: "25%",
        width: "3px",
        height: "3px",
        background: color,
        borderRadius: "50%",
        opacity: isHovered ? 0.6 : 0.2,
        animation: isHovered ? "float 2.5s ease-in-out infinite reverse" : "none",
        transition: "opacity 0.3s ease"
      }} />

      {/* Glowing border effect */}
      {isHovered && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(45deg, ${color}30, transparent, ${color}30)`,
          borderRadius: "20px",
          animation: "borderGlow 2s ease-in-out infinite",
          pointerEvents: "none"
        }} />
      )}

      {isText ? (
        <span style={{
          ...iconStyle,
          fontWeight: "bold",
          fontFamily: "monospace"
        }}>
          {title}
        </span>
      ) : (
        <Icon style={iconStyle} />
      )}

      <span style={{
        marginTop: "0.8rem",
        fontSize: "clamp(0.8rem, 2vw, 1rem)",
        fontWeight: "600",
        color: isHovered ? color : "#e2e8f0",
        textAlign: "center",
        transition: "color 0.3s ease",
        background: isHovered ? `linear-gradient(135deg, ${color}, #ffffff)` : "none",
        WebkitBackgroundClip: isHovered ? "text" : "none",
        WebkitTextFillColor: isHovered ? "transparent" : "inherit",
        backgroundClip: isHovered ? "text" : "none"
      }}>
        {title}
      </span>
    </div>
  );
}

function Techstack() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 100%)",
    position: "relative",
    overflow: "hidden",
    padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)"
  };

  const techCategories = [
    {
      title: "Programming Languages",
      techs: [
        { icon: null, title: "C", color: "#A8B9CC", isText: true },
        { icon: DiJava, title: "Java", color: "#ED8B00" },
        { icon: DiPhp, title: "PHP", color: "#777BB4" },
        { icon: DiPython, title: "Python", color: "#3776AB" }
      ]
    },
    {
      title: "Frontend Technologies",
      techs: [
        { icon: DiHtml5, title: "HTML5", color: "#E34F26" },
        { icon: DiCss3, title: "CSS3", color: "#1572B6" },
        { icon: DiJavascript1, title: "JavaScript", color: "#F7DF1E" },
        { icon: DiReact, title: "React.js", color: "#61DAFB" },
        { icon: SiVuedotjs, title: "Vue.js", color: "#4FC08D" }
      ]
    },
    {
      title: "Backend & Frameworks",
      techs: [
        { icon: SiSpringboot, title: "Spring Boot", color: "#6DB33F" },
        { icon: SiExpress, title: "Express.js", color: "#ffffff" },
        { icon: DiNodejs, title: "Node.js", color: "#339933" }
      ]
    },
    {
      title: "Databases",
      techs: [
        { icon: SiMysql, title: "MySQL", color: "#4479A1" },
        { icon: DiMongodb, title: "MongoDB", color: "#47A248" }
      ]
    },
    {
      title: "Tools & Platforms",
      techs: [
        { icon: DiGit, title: "Git", color: "#F05032" },
        { icon: SiGithub, title: "GitHub", color: "#ffffff" },
        { icon: SiVisualstudiocode, title: "VS Code", color: "#007ACC" }
      ]
    }
  ];

  return (
    <div style={containerStyle}>
      {/* Animated background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.1) 0%, transparent 50%)`,
        pointerEvents: "none",
        transition: "background 0.3s ease"
      }} />

      {/* Floating background elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "20px",
        height: "20px",
        background: "rgba(100, 255, 218, 0.3)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute",
        top: "70%",
        right: "15%",
        width: "15px",
        height: "15px",
        background: "rgba(129, 140, 248, 0.4)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite reverse"
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        left: "20%",
        width: "25px",
        height: "25px",
        background: "rgba(34, 197, 94, 0.2)",
        borderRadius: "50%",
        animation: "float 7s ease-in-out infinite"
      }} />

      {/* Main header */}
      <div style={{
        textAlign: "center",
        marginBottom: "clamp(3rem, 8vw, 6rem)",
        position: "relative",
        zIndex: 2
      }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: "800",
          background: "linear-gradient(135deg, #64ffda 0%, #818cf8 50%, #22c55e 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "1rem",
          textShadow: "0 0 50px rgba(100, 255, 218, 0.3)"
        }}>
          Tech Stack
        </h1>
        <p style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
          color: "#94a3b8",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Technologies I work with to bring ideas to life
        </p>
      </div>

      {/* Tech categories */}
      {techCategories.map((category, categoryIndex) => (
        <div key={category.title} style={{ 
          marginBottom: "clamp(4rem, 8vw, 6rem)",
          position: "relative",
          zIndex: 2
        }}>
          <SectionHeading title={category.title} />
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "clamp(1rem, 3vw, 2rem)",
            maxWidth: "1200px",
            margin: "0 auto",
            justifyItems: "center"
          }}>
            {category.techs.map((tech, techIndex) => (
              <TechIcon
                key={tech.title}
                icon={tech.icon}
                title={tech.title}
                color={tech.color}
                delay={categoryIndex * 200 + techIndex * 100}
                isText={tech.isText}
              />
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          33% { 
            transform: translateY(-20px) rotate(120deg); 
            opacity: 1;
          }
          66% { 
            transform: translateY(10px) rotate(240deg); 
            opacity: 0.8;
          }
        }

        @keyframes borderGlow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.02);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .section-heading h2 {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .section-heading h2 {
            font-size: 1.5rem !important;
          }
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
          background: linear-gradient(135deg, #818cf8, #22c55e);
        }

        /* Selection styling */
        ::selection {
          background: rgba(100, 255, 218, 0.3);
          color: #fff;
        }

        ::-moz-selection {
          background: rgba(100, 255, 218, 0.3);
          color: #fff;
        }

        /* Enhanced focus states for accessibility */
        *:focus {
          outline: 2px solid #64ffda;
          outline-offset: 2px;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Techstack;