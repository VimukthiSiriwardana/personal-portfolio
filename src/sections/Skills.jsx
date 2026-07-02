import SectionTitle from "../components/SectionTitle";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#020617] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="MY EXPERTISE"
          title="Technical Skills"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (

            <div
              key={skill.category}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (

                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-950 transition-all duration-300"
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