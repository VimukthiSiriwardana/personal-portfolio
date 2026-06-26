import SectionTitle from "../components/SectionTitle";
import contact from "../data/contact";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#05081a] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="GET IN TOUCH"
          title="Contact Me"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* LEFT */}

          <div className="space-y-8">

            {/* Email */}

            <a
              href={`mailto:${contact.email}`}
              className="block bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">

                <MdEmail className="text-cyan-400 text-3xl" />

                <h3 className="text-cyan-400 text-xl font-semibold">
                  Email
                </h3>

              </div>

              <p className="text-white text-lg">
                {contact.email}
              </p>
            </a>

            {/* GitHub */}

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="block bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">

                <FaGithub className="text-cyan-400 text-3xl" />

                <h3 className="text-cyan-400 text-xl font-semibold">
                  GitHub
                </h3>

              </div>

              <p className="text-white text-lg hover:text-cyan-400 transition">
                Visit GitHub Profile →
              </p>
            </a>

            {/* LinkedIn */}

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">

                <FaLinkedin className="text-cyan-400 text-3xl" />

                <h3 className="text-cyan-400 text-xl font-semibold">
                  LinkedIn
                </h3>

              </div>

              <p className="text-white text-lg hover:text-cyan-400 transition">
                Visit LinkedIn Profile →
              </p>
            </a>

            {/* Location */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

              <div className="flex items-center gap-4 mb-4">

                <MdLocationOn className="text-cyan-400 text-3xl" />

                <h3 className="text-cyan-400 text-xl font-semibold">
                  Location
                </h3>

              </div>

              <p className="text-white text-lg">
                {contact.location}
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 flex flex-col justify-center">

            <h2 className="text-5xl font-bold text-white mb-8">
              Let's Build Something Great
            </h2>

            <p className="text-slate-400 leading-10 text-xl mb-10">
              I'm always interested in networking, enterprise
              infrastructure, Linux administration, cloud technologies,
              cybersecurity, and software engineering opportunities.
              Feel free to connect with me.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/Vimukthi_Siriwardana_CV.pdf"
                download
                className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                <FaFileDownload />
                Download CV
              </a>

              <span className="inline-flex items-center px-5 py-4 rounded-xl border border-cyan-500 text-cyan-400 font-medium">
                Available for Internships
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;