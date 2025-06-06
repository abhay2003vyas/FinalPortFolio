import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
      {/* Typing indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginRight: '1rem'
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          background: '#22c55e',
          borderRadius: '50%',
          animation: 'pulse 2s ease-in-out infinite'
        }} />
        <span style={{
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          color: '#94a3b8',
          fontWeight: '500'
        }}>
          I'm a
        </span>
      </div>

      {/* Enhanced Typewriter */}
      <div style={{
        fontSize: 'clamp(0.8rem, 2.6vw, 1.1rem)',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #64ffda, #818cf8, #22c55e)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 3s ease infinite',
        minHeight: '2rem',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Typewriter
          options={{
            strings: [
              "Frontend Developer",
              "Backend Developer", 
              "Competitive Programmer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 80,
            cursor: '|',
            cursorClassName: 'typewriter-cursor'
          }}
        />
      </div>

      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        right: '-20px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '6px',
        height: '6px',
        background: 'rgba(100, 255, 218, 0.6)',
        borderRadius: '50%',
        animation: 'float 2s ease-in-out infinite'
      }} />

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(-50%) translateX(0px); 
          }
          50% { 
            transform: translateY(-50%) translateX(5px); 
          }
        }

        /* Enhanced cursor styling */
        .typewriter-cursor {
          color: #64ffda !important;
          font-weight: 100 !important;
          animation: blink 1s infinite !important;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .typewriter-cursor {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Type;