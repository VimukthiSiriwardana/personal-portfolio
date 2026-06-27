import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @keyframes vsScan{
          0%{transform:translateX(-120%);}
          100%{transform:translateX(220%);}
        }

        @keyframes vsGrid{
          0%{background-position:0 0;}
          100%{background-position:40px 40px;}
        }

        .vs-nav{
          position:relative;

          background-image:
            linear-gradient(rgba(2,6,23,.88),rgba(2,6,23,.88)),
            linear-gradient(to right,rgba(56,189,248,.06) 1px,transparent 1px),
            linear-gradient(to bottom,rgba(56,189,248,.06) 1px,transparent 1px);

          background-size:auto,36px 36px,36px 36px;

          animation:vsGrid 7s linear infinite;
        }

        .vs-nav::after{
          content:"";
          position:absolute;
          bottom:-1px;
          left:0;
          width:24%;
          height:1px;

          background:linear-gradient(
            90deg,
            transparent,
            #22d3ee 40%,
            #818cf8 60%,
            transparent
          );

          box-shadow:0 0 10px rgba(34,211,238,.6);

          animation:vsScan 4.5s ease-in-out infinite;
        }

        .vs-link{
          position:relative;
          display:inline-block;

          font-family:ui-monospace,'JetBrains Mono',monospace;
          font-size:.78rem;
          letter-spacing:.14em;
          text-transform:uppercase;

          color:#94a3b8;

          padding:4px 2px;

          transition:.25s;
        }

        .vs-link::before{
          content:"";
          position:absolute;

          left:50%;
          bottom:0;

          width:0%;
          height:1px;

          transform:translateX(-50%);

          background:linear-gradient(
            90deg,
            #22d3ee,
            #818cf8
          );

          box-shadow:0 0 8px rgba(34,211,238,.8);

          transition:.3s;
        }

        .vs-link::after{
          content:"";
          position:absolute;

          left:50%;
          top:-9px;

          width:4px;
          height:4px;

          border-radius:999px;

          background:#22d3ee;

          box-shadow:0 0 6px #22d3ee;

          opacity:0;

          transform:translate(-50%,4px);

          transition:.25s;
        }

        .vs-link:hover{
          color:#67e8f9;
        }

        .vs-link:hover::before{
          width:100%;
        }

        .vs-link:hover::after{
          opacity:1;
          transform:translate(-50%,0);
        }

        @media(prefers-reduced-motion:reduce){
          .vs-nav,
          .vs-nav::after{
            animation:none!important;
          }
        }
      `}</style>

      <nav className="vs-nav fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}

          <a
            href="#home"
            className="flex items-center"
          >
            <img
              src="/logo-white.png"
              alt="Vimukthi Siriwardana Logo"
              className="h-20 w-auto transition duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}

          <ul className="hidden md:flex gap-10">

            <li>
              <a href="#home" className="vs-link">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="vs-link">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="vs-link">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="vs-link">
                Projects
              </a>
            </li>

            <li>
              <a href="#certifications" className="vs-link">
                Certifications
              </a>
            </li>

            <li>
              <a href="#contact" className="vs-link">
                Contact
              </a>
            </li>

          </ul>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyan-400 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-96 border-t border-slate-800"
              : "max-h-0"
          }`}
        >

          <ul className="flex flex-col bg-slate-950">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block px-6 py-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block px-6 py-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="block px-6 py-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block px-6 py-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#certifications"
                onClick={closeMenu}
                className="block px-6 py-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
              >
                Certifications
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block px-6 py-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition"
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