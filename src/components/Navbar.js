import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    // Intersection Observer for active section detection
    const sections = document.querySelectorAll("section[id], div[id]");
    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      observer.disconnect();
    };
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    updateExpanded(false);
  };

  const handleNavClick = (section, path) => {
    if (
      window.location.pathname === "/" &&
      section !== "blog" &&
      section !== "fork"
    ) {
      // If on home page, scroll to section
      smoothScrollTo(section);
    } else if (path) {
      // Navigate to different page
      window.location.href = path;
    }
  };

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={`custom-navbar ${navColour ? "navbar-scrolled" : ""}`}
        style={{
          background: navColour
            ? "rgba(13, 13, 13, 0.95)"
            : "rgba(13, 13, 13, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: navColour
            ? "1px solid rgba(100, 255, 218, 0.2)"
            : "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: "0.5rem 0",
          boxShadow: navColour ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "none",
          zIndex: 9999,
        }}
      >
        <Container>
          {/* Logo with glow effect */}
          <Navbar.Brand
            as={Link}
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.8rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #64ffda, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.target.style.textShadow = "0 0 20px rgba(100, 255, 218, 0.5)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.textShadow = "none";
              e.target.style.transform = "scale(1)";
            }}
          >
            AV
          </Navbar.Brand>

          {/* Custom hamburger menu */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
            style={{
              border: "none",
              padding: "4px 8px",
              background: "rgba(100, 255, 218, 0.1)",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
          >
            <div className="hamburger-container">
              <span
                className={`hamburger-line ${expand ? "active" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${expand ? "active" : ""}`}
              ></span>
              <span
                className={`hamburger-line ${expand ? "active" : ""}`}
              ></span>
            </div>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto"
              style={{ alignItems: "center", gap: "0.5rem" }}
            >
              {/* Navigation Items */}
              <Nav.Item>
                <Nav.Link
                  onClick={() => handleNavClick("home", "/")}
                  className={`nav-link-custom ${
                    activeSection === "home" ? "active" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    color: activeSection === "home" ? "#64ffda" : "#ffffff",
                    background:
                      activeSection === "home"
                        ? "rgba(100, 255, 218, 0.1)"
                        : "transparent",
                    border:
                      activeSection === "home"
                        ? "1px solid rgba(100, 255, 218, 0.3)"
                        : "1px solid transparent",
                    fontWeight: "500",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== "home") {
                      e.target.style.background = "rgba(100, 255, 218, 0.05)";
                      e.target.style.color = "#64ffda";
                      e.target.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== "home") {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#ffffff";
                      e.target.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <AiOutlineHome
                    style={{ marginRight: "8px", fontSize: "1.1em" }}
                  />
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  onClick={() => handleNavClick("about", "/about")}
                  className={`nav-link-custom ${
                    activeSection === "about" ? "active" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    color: activeSection === "about" ? "#818cf8" : "#ffffff",
                    background:
                      activeSection === "about"
                        ? "rgba(129, 140, 248, 0.1)"
                        : "transparent",
                    border:
                      activeSection === "about"
                        ? "1px solid rgba(129, 140, 248, 0.3)"
                        : "1px solid transparent",
                    fontWeight: "500",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== "about") {
                      e.target.style.background = "rgba(129, 140, 248, 0.05)";
                      e.target.style.color = "#818cf8";
                      e.target.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== "about") {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#ffffff";
                      e.target.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <AiOutlineUser
                    style={{ marginRight: "8px", fontSize: "1.1em" }}
                  />
                  About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  onClick={() => handleNavClick("projects", "/project")}
                  className={`nav-link-custom ${
                    activeSection === "projects" ? "active" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    color: activeSection === "projects" ? "#22c55e" : "#ffffff",
                    background:
                      activeSection === "projects"
                        ? "rgba(34, 197, 94, 0.1)"
                        : "transparent",
                    border:
                      activeSection === "projects"
                        ? "1px solid rgba(34, 197, 94, 0.3)"
                        : "1px solid transparent",
                    fontWeight: "500",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== "projects") {
                      e.target.style.background = "rgba(34, 197, 94, 0.05)";
                      e.target.style.color = "#22c55e";
                      e.target.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== "projects") {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#ffffff";
                      e.target.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginRight: "8px", fontSize: "1.1em" }}
                  />
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  onClick={() => handleNavClick("resume", "/resume")}
                  className={`nav-link-custom ${
                    activeSection === "resume" ? "active" : ""
                  }`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    color: activeSection === "resume" ? "#f59e0b" : "#ffffff",
                    background:
                      activeSection === "resume"
                        ? "rgba(245, 158, 11, 0.1)"
                        : "transparent",
                    border:
                      activeSection === "resume"
                        ? "1px solid rgba(245, 158, 11, 0.3)"
                        : "1px solid transparent",
                    fontWeight: "500",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== "resume") {
                      e.target.style.background = "rgba(245, 158, 11, 0.05)";
                      e.target.style.color = "#f59e0b";
                      e.target.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== "resume") {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#ffffff";
                      e.target.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <CgFileDocument
                    style={{ marginRight: "8px", fontSize: "1.1em" }}
                  />
                  Resume
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Global Styles */}
      <style jsx global>{`
        /* Hamburger Animation */
        .hamburger-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: all 0.3s ease;
        }

        .hamburger-line {
          width: 25px;
          height: 3px;
          background: linear-gradient(135deg, #64ffda, #818cf8);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger-line.active:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger-line.active:nth-child(2) {
          opacity: 0;
          transform: translateX(-20px);
        }

        .hamburger-line.active:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        /* Navbar Responsive */
        @media (max-width: 768px) {
          .custom-navbar .navbar-collapse {
            background: rgba(13, 13, 13, 0.98);
            backdrop-filter: blur(20px);
            border-radius: 16px;
            padding: 1.5rem;
            margin-top: 1rem;
            border: 1px solid rgba(100, 255, 218, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .custom-navbar .navbar-nav {
            gap: 0.75rem !important;
          }

          .nav-link-custom {
            justify-content: center !important;
            text-align: center !important;
            padding: 1rem 1.5rem !important;
            margin: 0.25rem 0 !important;
            font-size: 1.1rem !important;
          }

          .fork-btn {
            margin: 1rem 0 0.5rem 0 !important;
            text-align: center;
          }

          .fork-btn-inner {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 576px) {
          .custom-navbar .container {
            padding: 0 1rem;
          }

          .navbar-brand {
            font-size: 1.5rem !important;
          }

          .navbar-brand img {
            width: 35px !important;
            height: 35px !important;
          }
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Loading Animation */
        .nav-link-custom::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.6s;
        }

        .nav-link-custom:hover::before {
          left: 100%;
        }

        /* Active section indicator */
        .nav-link-custom.active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: currentColor;
          border-radius: 1px;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: 60%;
          }
        }

        /* Performance optimizations */
        .custom-navbar * {
          backface-visibility: hidden;
          perspective: 1000px;
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
      `}</style>
    </>
  );
}

export default NavBar;
