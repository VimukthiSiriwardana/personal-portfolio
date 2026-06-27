import contact from "../data/contact";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">

      {/* Glow Line */}

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* About */}

          <div>

            <a href="#home">

              <img
                src="/logo-white.png"
                alt="VS Logo"
                className="h-16 mb-5 transition duration-300 hover:scale-105"
              />

            </a>

            <h3 className="text-white text-2xl font-bold">
              Vimukthi Siriwardana
            </h3>

            <p className="text-slate-400 mt-4 leading-7">
              Computer Systems & Network Engineering Undergraduate passionate
              about Enterprise Infrastructure, Linux Administration,
              Networking, Cloud Technologies and Cybersecurity.
            </p>

            <div className="flex items-center gap-2 mt-5 text-slate-500">

              <FaMapMarkerAlt className="text-cyan-400" />

              <span>Sri Lanka</span>

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Certifications", "#certifications"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (

                <li key={name}>

                  <a
                    href={link}
                    className="inline-block text-slate-400 hover:text-cyan-400 hover:translate-x-1 transition duration-300"
                  >
                    {name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition"
              >
                <FaEnvelope />
                {contact.email}
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition"
              >
                <FaGithub />
                GitHub
                <FaExternalLinkAlt className="text-xs opacity-70" />
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
                LinkedIn
                <FaExternalLinkAlt className="text-xs opacity-70" />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-slate-500 text-sm text-center md:text-left">

            © {new Date().getFullYear()}{" "}

            <a
              href="#home"
              className="text-cyan-400 hover:text-white transition"
            >
              Vimukthi Siriwardana
            </a>

            . All Rights Reserved.

          </p>

          <p className="text-slate-500 text-sm text-center">
            Built with React • Vite • Tailwind CSS
          </p>

          <a
            href="#home"
            className="w-11 h-11 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition duration-300 shadow-lg shadow-cyan-500/20"
            title="Back to Top"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;