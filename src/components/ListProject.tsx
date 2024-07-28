import { ProjectCard } from "./ProjectCard";
import { projects } from "../seed/projects";

export const ListProject = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
            detailsLink={project.detailsLink}
          />
        ))}
      </div>
    </div>
  );
};
