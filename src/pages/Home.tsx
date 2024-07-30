import {
  FaFolder,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaSuitcaseRolling,
  FaUser,
} from "react-icons/fa";
import { PublicLayout } from "../layout/PublicLayout";
import {
  ExperienceCard,
  ListProject,
  ModalProjectDetails,
} from "../components";
import { DataProfileCard } from "../components/DataProfileCard";
import { Typewriter } from "../components/Typewriter";
import { Carousel } from "../components/Carousel"; // Import the new Carousel component
import { experiences } from "../seed/experiences";
import { technologies, technologyIcons } from "../seed/technologies";
import { useEffect, useState } from "react";

type TechnologyCategory = keyof typeof technologies;

const Home = () => {
  const categories = Object.keys(technologies) as TechnologyCategory[];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedCategory, setSelectedCategory] = useState<TechnologyCategory>(
    categories[0]
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    title: "",
    description: "",
  });

  const filteredTechnologies = technologies[selectedCategory];

  const words = [
    "Desarrollador Web",
    "Practicante Cloud",
    "Entusiasta de la Tecnología",
  ];

  const handleDetailsClick = (title: string, description: string) => {
    setSelectedProject({ title, description });
    setIsOpenModal(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PublicLayout main={true}>
      <div className="relative flex flex-col items-center justify-center flex-1 w-full lg:w-[80%] mx-auto text-white">
        <section id="about" className="flex items-center justify-center w-full">
          <DataProfileCard icon={<></>} title="">
            <div className="flex flex-col items-center justify-center w-full mb-12 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0 md:mr-6">
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQHlj1RPixrkLg/profile-displayphoto-shrink_800_800/0/1721528725361?e=1727308800&v=beta&t=E5DDTsztDa4-vWRIMlTCHZeUpcY8MyASSztzMLIvx1Q"
                  alt="Avatar"
                  className="w-[13rem] h-[13rem] rounded-full border-4 border-gray-700 animate-glow"
                />
              </div>
              <div className="flex flex-col items-center mt-4 space-y-4 text-center md:mt-0 md:items-start md:text-left md:space-y-6">
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl font-bold text-title md:text-4xl">
                    Sebastián Chaquila Muñoz
                  </h1>
                  <Typewriter words={words} />
                </div>
                <div className="flex flex-col items-center w-full space-y-2 md:space-y-0 md:flex-row md:space-x-4">
                  <a
                    href="/Sebastian_Chaquila_Muñoz_CV.pdf"
                    download
                    className="w-full md:w-auto"
                  >
                    <button className="w-full px-6 py-3 font-semibold text-gray-200 transition duration-300 ease-in-out transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50">
                      Descargar CV
                    </button>
                  </a>
                  <a
                    href="mailto:sebascha.sistemas2003@gmail.com"
                    className="w-full md:w-auto"
                  >
                    <button className="w-full px-6 py-3 font-semibold text-gray-700 transition duration-300 ease-in-out transform bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50">
                      Contáctame
                    </button>
                  </a>
                </div>
                <div className="flex justify-center mt-4 space-x-6 md:justify-start">
                  <a
                    title="GitHub"
                    href="https://github.com/SebaschaM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-3xl text-gray-200 transition duration-300 ease-in-out transform hover:text-white hover:scale-105" />
                  </a>
                  <a
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/sebastianchaquilamunozj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-3xl text-gray-200 transition duration-300 ease-in-out transform hover:text-blue-400 hover:scale-105" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaUser className="mr-2 text-xl" />
              <h2 className="font-bold text-subtitle1">Sobre mí</h2>
            </div>
            <div className="flex flex-wrap items-start justify-start mt-4 text-gray-300 md:space-x-4 text-normal">
              <p className="leading-relaxed">
                Soy un desarrollador web con aproximadamente 1 año de
                experiencia en el sector, apasionado por la tecnología y la
                innovación. Me especializo en la creación de aplicaciones web
                eficientes y escalables, siempre buscando aprender y mejorar mis
                habilidades. Mi objetivo es utilizar la tecnología para resolver
                problemas y mejorar la vida de las personas.
              </p>
            </div>
          </DataProfileCard>
        </section>

        <section
          id="experience"
          className="flex items-center justify-center w-full"
        >
          <DataProfileCard icon={<FaSuitcaseRolling />} title="Experiencias">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  company={experience.company}
                  date={experience.date}
                  tasks={experience.tasks}
                  techStack={experience.techStack}
                />
              ))}
            </div>
          </DataProfileCard>
        </section>

        <section
          id="projects"
          className="flex items-center justify-center w-full"
        >
          <DataProfileCard
            icon={<FaFolder />}
            title="Proyectos"
            viewAllLink="/projects"
          >
            {windowWidth > 800 ? (
              <Carousel onDetailsClick={handleDetailsClick} />
            ) : (
              <ListProject onDetailsClick={handleDetailsClick} main={true} />
            )}
          </DataProfileCard>
        </section>

        <section
          id="technologies"
          className="flex flex-col items-center justify-center w-full"
        >
          <DataProfileCard icon={<FaGlobe />} title="Tecnologías">
            <div className="flex items-center justify-between w-full mb-6">
              <label className="text-white">Filtrar por categoría:</label>
              <select
                title="Filtrar por categoría"
                className="p-2 text-white bg-gray-700 rounded-md"
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as TechnologyCategory)
                }
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 text-gray-300 md:grid-cols-2 lg:grid-cols-3 text-normal">
              {filteredTechnologies.map((tech) => (
                <div
                  key={tech}
                  className="p-4 transition duration-300 ease-in-out transform bg-gray-700 rounded-lg hover:bg-gray-600 hover:-translate-y-1 hover:scale-105"
                >
                  <div className="flex items-center px-2 py-1 space-x-2 text-white transition duration-300 ease-in-out">
                    {technologyIcons[tech]}
                    <span>{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </DataProfileCard>
        </section>

        <footer
          id="footer"
          className="relative z-10 w-full p-8 mb-4 rounded-lg shadow-lg bg-with-glow"
        >
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
            reservados.
          </p>
        </footer>
        <ModalProjectDetails
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          title={selectedProject.title}
          description={selectedProject.description}
        />
      </div>
    </PublicLayout>
  );
};

export default Home;
