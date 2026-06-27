import contact from "../data/contact";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo & About */}

          <div>

            <a href="#home">

              <img
                src="/logo-white.png"
                alt="VS Logo"
                className="h-16 mb-5 hover:scale-105 transition duration-300"
              />

            </a>

            <h3 className="text-white text-2xl font-bold">
              Vimukthi Siriwardana
            </h3>

            <p className="text-slate-400 mt-4 leading-7">
              Computer Systems & Network Engineering Undergraduate passionate
              about Enterprise Infrastructure, Networking, Linux Administration,
              Cloud Technologies and Cybersecurity.
            </p>

            <div className="flex items-center gap-2 mt-5 text-slate-500">

              <FaMapMarkerAlt />

              <span>Sri Lanka</span>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a
                  href="#home"
                  className="inline-block hover:text-cyan-400 hover:translate-x-1 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="inline-block hover:text-cyan-400 hover:translate-x-1 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="inline-block hover:text-cyan-400 hover:translate-x-1 transition duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="inline-block hover:text-cyan-400 hover:translate-x-1 transition duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="inline-block hover:text-cyan-400 hover:translate-x-1 transition duration-300"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 hover:underline transition duration-300"
              >
                <FaEnvelope />

                {contact.email}
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition duration-300"
              >
                <FaGithub />

                GitHub
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition duration-300"
              >
                <FaLinkedin />

                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-slate-500 text-sm text-center md:text-left">
  © {new Date().getFullYear()}{" "}
  <a
    href="#home"
    className="text-cyan-400 hover:text-white transition duration-300"
  >
    Vimukthi Siriwardana
  </a>
  . All Rights Reserved.
</p>

          <p className="text-slate-500 text-sm text-center">
            Designed & Developed with React, Vite & Tailwind CSS
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition duration-300"
          >
            <FaArrowUp />
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;