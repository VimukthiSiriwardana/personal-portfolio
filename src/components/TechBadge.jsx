function TechBadge({ name }) {
  return (
    <span className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-slate-950 transition duration-300">
      {name}
    </span>
  );
}

export default TechBadge;