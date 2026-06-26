import portfolio from "../constants/portfolio";
import heroImage from "../assets/images/vimukthi.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>

          <p className="text-sky-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight">
            {portfolio.name}
          </h1>

          <h2 className="mt-5 text-2xl text-slate-300">
            {portfolio.title}
          </h2>

          <p className="mt-8 text-slate-400 leading-8 text-lg">
            {portfolio.description}
          </p>

          <div className="mt-10 flex gap-5">

            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-600 transition px-7 py-3 rounded-xl font-semibold inline-block"
            >
              {portfolio.buttons.projects}
            </a>

            <a
              href="/Vimukthi_Siriwardana_CV.pdf"
              download
              className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-950 transition px-7 py-3 rounded-xl font-semibold inline-block"
            >
              {portfolio.buttons.cv}
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src={heroImage}
            alt={portfolio.name}
            className="w-[480px] rounded-3xl shadow-2xl border border-sky-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;