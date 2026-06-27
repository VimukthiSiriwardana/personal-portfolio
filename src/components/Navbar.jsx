function Navbar() {
  return (
    <>
      <style>{`
        @keyframes vsGlow {
          0%, 100% {
            text-shadow: 0 0 8px rgba(34,211,238,0.55), 0 0 18px rgba(34,211,238,0.25);
          }
          50% {
            text-shadow: 0 0 14px rgba(34,211,238,0.85), 0 0 32px rgba(34,211,238,0.45);
          }
        }
        @keyframes vsBlink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes vsScan {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
        @keyframes vsGrid {
          0%   { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }

        .vs-nav {
          position: relative;
          background-image:
            linear-gradient(rgba(2,6,23,0.88), rgba(2,6,23,0.88)),
            linear-gradient(to right, rgba(56,189,248,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56,189,248,0.06) 1px, transparent 1px);
          background-size: auto, 36px 36px, 36px 36px;
          animation: vsGrid 7s linear infinite;
        }

        .vs-nav::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          height: 1px;
          width: 24%;
          background: linear-gradient(90deg, transparent, #22d3ee 40%, #818cf8 60%, transparent);
          box-shadow: 0 0 10px rgba(34,211,238,0.6);
          animation: vsScan 4.5s ease-in-out infinite;
          pointer-events: none;
        }

        .vs-logo {
          font-family: ui-monospace, 'JetBrains Mono', 'Fira Code', monospace;
          letter-spacing: 0.03em;
          animation: vsGlow 2.6s ease-in-out infinite;
        }
        .vs-logo::after {
          content: "_";
          margin-left: 2px;
          color: #67e8f9;
          animation: vsBlink 1.1s step-end infinite;
        }

        .vs-link {
          position: relative;
          display: inline-block;
          font-family: ui-monospace, 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94a3b8;
          padding: 4px 2px;
          transition: color 0.25s ease;
        }
        .vs-link::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0%;
          height: 1px;
          background: linear-gradient(90deg, #22d3ee, #818cf8);
          box-shadow: 0 0 8px rgba(34,211,238,0.8);
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .vs-link::after {
          content: "";
          position: absolute;
          left: 50%;
          top: -9px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #22d3ee;
          box-shadow: 0 0 6px #22d3ee;
          opacity: 0;
          transform: translate(-50%, 4px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .vs-link:hover {
          color: #67e8f9;
        }
        .vs-link:hover::before {
          width: 100%;
        }
        .vs-link:hover::after {
          opacity: 1;
          transform: translate(-50%, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-nav, .vs-nav::after, .vs-logo, .vs-logo::after {
            animation: none !important;
          }
        }
      `}</style>

      <nav className="vs-nav fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="vs-logo text-2xl font-bold text-sky-400 hover:text-cyan-300 transition"
          >
            VS
          </a>

          {/* Navigation */}

          <ul className="hidden md:flex gap-10">

            <li>
              <a
                href="#home"
                className="vs-link"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="vs-link"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="vs-link"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="vs-link"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="vs-link"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;