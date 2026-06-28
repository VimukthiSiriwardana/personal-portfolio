import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#020617] py-15 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;