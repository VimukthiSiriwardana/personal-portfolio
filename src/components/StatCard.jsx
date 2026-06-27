import CountUp from "react-countup";

function StatCard({ value, label }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-4xl font-bold text-cyan-400">
        <CountUp end={value} duration={2} />+
      </h3>

      <p className="mt-3 text-slate-300">
        {label}
      </p>
    </div>
  );
}

export default StatCard;