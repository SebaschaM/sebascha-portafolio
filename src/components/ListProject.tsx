import { ProjectCard } from "./ProjectCard";
import { projects } from "../seed/projects";
import { Technologies } from "../interfaces/Project";

interface ListProjectProps {
  onDetailsClick: (
    title: string,
    description: string,
    technologies: Technologies[],
    link: string,
    imageUrl: string
  ) => void;
  main?: boolean;
}

export const ListProject = ({ onDetailsClick, main }: ListProjectProps) => {
  const listProjects = main ? projects.slice(0, 3) : projects;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {listProjects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              title={project.title}
              imageUrl={project.imageUrl}
              link={project.link}
              onDetailsClick={() =>
                onDetailsClick(
                  project.title,
                  project.description,
                  project.technologies,
                  project.link,
                  project.imageUrl
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
