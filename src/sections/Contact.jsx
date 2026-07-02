import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import contact from "../data/contact";
import emailjs from "@emailjs/browser";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

import {
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "vimukthi23",
        "template_2004",
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        "4Uetq-Q_lhWwdiz8Q"
      );

      alert("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#05081a] py-5 px-6"
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

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-white mb-8">
              Send Me a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400 transition"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none resize-none focus:border-cyan-400 transition"
              />

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition duration-300"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;