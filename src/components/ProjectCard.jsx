function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">

      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-110 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8">

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 leading-7 mb-6">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-800 text-cyan-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition"
            >
              GitHub
            </a>
          )}

          {project.documentation && (
            <a
              href={project.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-5 py-2 rounded-lg transition"
            >
              Documentation
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-5 py-2 rounded-lg transition"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;