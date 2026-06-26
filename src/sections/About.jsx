import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Who I Am"
          title="About Me"
        />

        <div className="grid md:grid-cols-2 gap-14">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate about Enterprise Infrastructure
            </h3>

            <p className="text-slate-400 leading-9 text-lg">
              I'm a Computer Systems & Network Engineering undergraduate who enjoys
              designing reliable network infrastructure, deploying Linux servers,
              configuring Active Directory environments, and building enterprise
              monitoring solutions.
            </p>

            <p className="text-slate-400 leading-9 text-lg mt-6">
              I enjoy learning by building real-world projects that combine
              networking, Linux administration, automation, monitoring, and
              cybersecurity.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-sky-400 font-semibold mb-2">
                🎓 Education
              </h4>

              <p className="text-white">
                BSc (Hons) in Information Technology
                specialising in Computer Systems & Network Engineering
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-sky-400 font-semibold mb-2">
                🎯 Career Goal
              </h4>

              <p className="text-white">
                Network & Systems Engineer
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-sky-400 font-semibold mb-2">
                🌍 Location
              </h4>

              <p className="text-white">
                Sri Lanka
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-sky-400 font-semibold mb-2">
                💼 Focus
              </h4>

              <p className="text-white">
                Networking & Infrastructure
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;