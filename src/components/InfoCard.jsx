function InfoCard({ title, children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">
      <h3 className="text-cyan-400 text-xl font-semibold mb-5">
        {title}
      </h3>

      {children}
    </div>
  );
}

export default InfoCard;