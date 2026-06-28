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
      className="min-h-screen bg-slate-950 flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>

          <p className="text-sky-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight">
            {portfolio.name}
          </h1>

          <h2 className="mt-5 text-2xl leading-relaxed">
  <span className="text-cyan-400 font-semibold">
    Computer Systems & Network Engineering
  </span>{" "}
  <span className="text-slate-300">
    undergraduate at
  </span>{" "}
  <a
    href="https://www.sliit.lk/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-white hover:underline transition duration-300"
  >
    SLIIT
    <FaExternalLinkAlt className="text-sm" />
  </a>
</h2>

          <p className="mt-8 text-slate-400 leading-8 text-lg">
            {portfolio.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            {/* View Projects */}

            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-sky-500/30"
            >
              <FaArrowRight />
              {portfolio.buttons.projects}
            </a>

            {/* Download CV */}

            <a
              href="/Vimukthi_Siriwardana_CV.pdf"
              download
              className="inline-flex items-center gap-3 border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-950 px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              <FaDownload />
              {portfolio.buttons.cv}
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-slate-600 text-slate-300 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950 px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              <FaEnvelope />
              Contact Me
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src={heroImage}
            alt={portfolio.name}
            className="w-[480px] rounded-3xl shadow-2xl border border-sky-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;