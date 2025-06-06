import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Abhay_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-wrapper" id="resume" >
      <Container fluid className="resume-section">
        <Particle />

        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            paddingTop: "2rem",
          }}
        >
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            My <strong style={{ color: "#64ffda" }}>Resume</strong>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Download my resume to learn more about my experience and skills
          </p>
        </div>

        {/* Top Download Button */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "3rem",
          }}
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="600"
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(100, 255, 218, 0.2)",
              borderRadius: "16px",
              padding: "1.5rem",
              textAlign: "center",
              maxWidth: "300px",
              transition: "all 0.3s ease",
            }}
            className="download-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.border =
                "1px solid rgba(100, 255, 218, 0.4)";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(100, 255, 218, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border =
                "1px solid rgba(100, 255, 218, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{
                background: "linear-gradient(135deg, #64ffda, #00bcd4)",
                border: "none",
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#000",
                width: "100%",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(100, 255, 218, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(100, 255, 218, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(100, 255, 218, 0.3)";
              }}
            >
              <AiOutlineDownload
                style={{ marginRight: "8px", fontSize: "1.2rem" }}
              />
              Download CV
            </Button>
            <p
              style={{
                margin: "1rem 0 0 0",
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              PDF • Updated Recently
            </p>
          </div>
        </Row>

        <style jsx>{`
          .resume-preview-container {
            transition: all 0.3s ease;
          }

          .resume-preview-container:hover {
            transform: translateY(-10px);
            box-shadow: 0 35px 60px rgba(0, 0, 0, 0.3) !important;
          }

          .download-card {
            cursor: pointer;
          }

          @media (max-width: 992px) {
            h1 {
              font-size: 2.5rem !important;
            }
          }

          @media (max-width: 768px) {
            .resume-preview-container {
              padding: 1rem !important;
              margin: 0 1rem;
            }

            .download-card {
              margin: 0 1rem;
              max-width: 90% !important;
            }

            .resume-section p {
              font-size: 1rem !important;
            }

            .resume-section h1 {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 480px) {
            .download-card {
              padding: 1rem !important;
            }

            .resume-section h1 {
              font-size: 1.6rem !important;
            }

            .resume-section p {
              font-size: 0.95rem !important;
            }

            button {
              padding: 10px 16px !important;
              font-size: 1rem !important;
            }
          }
        `}</style>
      </Container>
    </div>
  );
}

export default ResumeNew;
