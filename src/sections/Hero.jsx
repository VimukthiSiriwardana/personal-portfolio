import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt
} from "react-icons/fa";

import portfolio from "../constants/portfolio";
import heroImage from "../assets/images/vimukthi.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 flex items-center px-6 pt-10 pb-20 overflow-hidden"
    >
      {/* Ambient background layer */}
      <div className="pointer-events-none absolute inset-0">
        {/* Fine grid, fades toward the edges */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)"
          }}
        />
        {/* Single restrained accent glow */}
        <div className="absolute top-1/3 right-[8%] w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[110px]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div className="hero-fade-up" style={{ animationDelay: "0ms" }}>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs tracking-wide text-slate-300">
              Available for opportunities
            </span>
          </div>

          <p className="font-mono text-sm text-sky-400 mb-3 tracking-wide">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight tracking-tight">
            {portfolio.name}
          </h1>

          <h2 className="mt-5 text-2xl leading-relaxed">
            <span className="text-cyan-400 font-semibold">
              Computer Systems &amp; Network Engineering
            </span>{" "}
            <span className="text-slate-400">
              undergraduate •
            </span>{" "}
            <a
              href="https://www.sliit.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 font-semibold border-b border-cyan-400/40 hover:border-cyan-400 hover:text-white transition-colors duration-300"
            >
              SLIIT
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </h2>

          <p className="mt-8 text-slate-400 leading-8 text-lg max-w-lg">
            {portfolio.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap items-center gap-4">

            {/* View Projects */}

            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              {portfolio.buttons.projects}
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Download CV */}

            <a
              href="/Vimukthi_Siriwardana_CV.pdf"
              download
              className="inline-flex items-center gap-3 border border-slate-600 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaDownload className="text-sm" />
              {portfolio.buttons.cv}
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium px-2 py-3.5 transition-colors duration-300"
            >
              <FaEnvelope className="text-sm" />
              Contact Me
            </a>

          </div>

        </div>

        {/* Right */}

        <div
          className="hero-fade-up flex justify-center"
          style={{ animationDelay: "150ms" }}
        >
          <div className="relative">
            {/* Soft accent glow behind the frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/20 via-cyan-500/10 to-transparent rounded-[2rem] blur-2xl" />

            {/* Terminal-style frame */}
            <div className="relative w-[480px] max-w-full rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/90">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 font-mono text-xs text-slate-500 truncate">
                  {portfolio.name.toLowerCase().replace(/\s+/g, "_")}.png
                </span>
              </div>

              <img
                src={heroImage}
                alt={portfolio.name}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.7s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;