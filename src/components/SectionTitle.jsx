function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <p className="text-sky-400 font-semibold uppercase tracking-[0.3em] mb-3">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;