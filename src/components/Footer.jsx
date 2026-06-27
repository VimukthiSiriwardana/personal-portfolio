import contact from "../data/contact";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <img
              src="/logo-white.png"
              alt="VS Logo"
              className="h-14 mb-4"
            />

            <h3 className="text-white text-xl font-bold">
              Vimukthi Siriwardana
            </h3>

            <p className="text-slate-400 mt-2 leading-7">
              Computer Systems & Network Engineering Undergraduate
              passionate about Enterprise Infrastructure,
              Networking, Linux Administration and Cybersecurity.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-4">
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
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Vimukthi Siriwardana. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm mt-3 md:mt-0">
            Built with ❤️ Vimukthi Siriwardana
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;