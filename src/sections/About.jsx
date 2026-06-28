import SectionTitle from "../components/SectionTitle";

function About() {
  const technologies = [
    "Linux","Cisco","Azure","Active Directory","Prometheus","Grafana",
    "Docker","Git","Python","Bash","Networking","Cybersecurity"
  ];

  const stats = [
    { value: "6+", label: "Completed Projects" },
    { value: "9+", label: "Professional Certifications" },
    { value: "7+", label: "Azure Badges" },
    { value: "3+", label: "Home Labs" },
  ];

  return (
    <section id="about" className="bg-slate-950 py-5 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="WHO I AM" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          <div>
            <h3 className="text-4xl font-bold text-white leading-tight">
              Building <span className="text-cyan-400">Enterprise Infrastructure</span> Solutions
            </h3>

            <p className="mt-8 text-slate-400 text-lg leading-8">
              I am a Computer Systems & Network Engineering undergraduate at{" "}
              <a
                href="https://www.sliit.lk/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline font-semibold"
              >
                SLIIT
              </a>
              {" "}with a strong interest in enterprise networking, Linux
              administration, cloud infrastructure and cybersecurity.
            </p>

            <p className="mt-6 text-slate-400 text-lg leading-8">
              I enjoy designing, deploying and monitoring real-world enterprise
              environments using Active Directory, Cisco technologies, Azure,
              Prometheus, Grafana and modern Linux administration tools.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="text-4xl font-bold text-cyan-400">{item.value}</h4>
                  <p className="mt-2 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition-all">
              <h4 className="text-cyan-400 text-xl font-semibold mb-5">🎓 Education</h4>
              <p className="text-white text-xl font-bold">
                BSc (Hons) in Information Technology
              </p>
              <p className="text-cyan-400 mt-3 font-semibold">
                Computer Systems & Network Engineering
              </p>
              <a
                href="https://www.sliit.lk/"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-slate-300 hover:text-cyan-400"
              >
                Sri Lanka Institute of Information Technology ↗
              </a>
              <p className="text-slate-500 mt-3">Expected Graduation • 2028</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition-all">
              <h4 className="text-cyan-400 text-xl font-semibold mb-5">🎯 Career Goals</h4>
              <ul className="space-y-3 text-slate-300">
                <li>✔ Enterprise Network Engineer</li>
                <li>✔ Linux System Administrator</li>
                <li>✔ Cloud Infrastructure Engineer</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition-all">
              <h4 className="text-cyan-400 text-xl font-semibold mb-5">💻 Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
