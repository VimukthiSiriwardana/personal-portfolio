import homelab from "../data/homelab";
import SectionTitle from "../components/SectionTitle";

function HomeLab() {
  return (
    <section
      id="homelab"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Hands-On Experience"
          title="Enterprise Home Lab"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {homelab.map((lab) => (

            <div
              key={lab.category}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {lab.category}
              </h3>

              <ul className="space-y-3">

                {lab.items.map((item) => (

                  <li
                    key={item}
                    className="text-slate-300 flex items-center gap-3"
                  >
                    <span className="text-green-400">✓</span>

                    {item}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default HomeLab;