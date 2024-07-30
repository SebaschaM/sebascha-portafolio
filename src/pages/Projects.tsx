import { useState } from "react";
import { ModalProjectDetails, ProjectCard } from "../components";
import { PublicLayout } from "../layout/PublicLayout";
import { projects } from "../seed/projects";
import { Project } from "../interfaces/Project";
import { selectedTechnologies } from "../seed/selectedTechnologies";
import { FiAlertCircle } from "react-icons/fi"; // Importar ícono de alerta

interface Technology {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

const Projects = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>({
    title: "",
    description: "",
    imageUrl: "",
    link: "",
    technologies: [],
  });
  const [selectedTechnologiesState, setSelectedTechnologiesState] = useState<
    string[]
  >([]);

  const handleDetailsClick = (title: string, description: string) => {
    setSelectedProject({
      title,
      description,
      imageUrl: "",
      link: "",
      technologies: [],
    });
    setIsOpenModal(true);
  };

  const handleTechnologyClick = (tech: string) => {
    if (selectedTechnologiesState.includes(tech)) {
      setSelectedTechnologiesState(
        selectedTechnologiesState.filter((item) => item !== tech)
      );
    } else {
      setSelectedTechnologiesState([...selectedTechnologiesState, tech]);
    }
  };

  const filteredProjects = selectedTechnologiesState.length
    ? projects.filter((project) =>
        project.technologies.some((tech) =>
          selectedTechnologiesState.includes(tech.name)
        )
      )
    : projects;

  return (
    <PublicLayout>
      <div className="relative min-h-screen p-4 bg-gray-900 md:p-10">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-full lg:w-[60rem] mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold text-center text-white md:text-5xl">
            Proyectos
          </h1>
          <p className="mb-6 text-sm text-center text-gray-300 md:text-lg">
            Una colección de nuestros trabajos más recientes. Haz clic en
            cualquier proyecto para más detalles.
          </p>
          <div className="flex flex-wrap justify-center mb-6 space-x-2 md:space-x-4">
            {selectedTechnologies.map((tech: Technology) => (
              <button
                key={tech.name}
                onClick={() => handleTechnologyClick(tech.name)}
                className={`flex items-center mb-4 px-2 md:px-4 py-1 md:py-2 border rounded-full shadow-md transition duration-300 ease-in-out transform ${
                  selectedTechnologiesState.includes(tech.name)
                    ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:shadow-lg"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100 hover:shadow-lg"
                }`}
              >
                <tech.icon
                  className="mr-1 text-lg md:mr-2 md:text-xl"
                  style={{ color: tech.color }}
                />
                <span className="text-sm md:text-base">{tech.name}</span>
              </button>
            ))}
          </div>
          <div className="grid w-full max-w-screen-xl grid-cols-1 gap-6 mx-auto md:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project: Project, index: number) => (
                <div
                  key={index}
                  className="transition-transform transform hover:scale-105"
                >
                  <ProjectCard
                    title={project.title}
                    imageUrl={project.imageUrl}
                    link={project.link}
                    onDetailsClick={() =>
                      handleDetailsClick(project.title, project.description)
                    }
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-white min-h-[200px] flex flex-col items-center justify-center space-y-4">
                <FiAlertCircle className="text-4xl text-yellow-500" />
                <p className="text-lg">
                  No hay proyectos disponibles en este momento. ¡Por favor,
                  vuelve más tarde!
                </p>
              </div>
            )}
          </div>
          <ModalProjectDetails
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            title={selectedProject.title}
            description={selectedProject.description}
          />
        </div>
      </div>
    </PublicLayout>
  );
};

export default Projects;
