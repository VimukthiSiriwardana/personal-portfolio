import SectionTitle from "../components/SectionTitle";
import certificates from "../data/certificates";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <SectionTitle
          subtitle="PROFESSIONAL DEVELOPMENT"
          title="Certifications"
        />

        <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-center text-lg leading-8">
          Continuous learning through Microsoft Learn, Cisco Networking Academy,
          and SLIIT professional certification programs.
        </p>

        {/* Certificates */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {certificates.map((certificate, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">

                <FaAward className="text-cyan-400 text-3xl" />

              </div>

              <h3 className="text-white text-2xl font-bold leading-tight">
                {certificate.title}
              </h3>

              <p className="text-cyan-400 mt-3 font-medium">
                {certificate.issuer}
              </p>

              <p className="text-slate-400 mt-2">
                {certificate.year}
              </p>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl font-semibold text-slate-950"
              >
                View Certificate
                <FaExternalLinkAlt className="text-sm" />
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;