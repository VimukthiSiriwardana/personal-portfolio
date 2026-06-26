import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#020617] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.4em] text-center mb-3">
          My Expertise
        </p>

        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (

            <div
              key={skill.category}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (

                  <span
                    key={item}
                    className="bg-slate-800 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;