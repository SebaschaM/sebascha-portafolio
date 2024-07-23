import { IoIosCodeWorking } from "react-icons/io";
import {
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiIonic,
  SiGithub,
  SiPostman,
  SiNestjs,
  SiJenkins,
  SiDocker,
  SiGooglecloud,
  SiAmazonaws,
} from "react-icons/si";
import { MdOutlineTask } from "react-icons/md";
import { experiences } from "../seed/experiences";

interface ExperienceCardProps {
  company: string;
  date: string;
  tasks: string[];
  techStack: string[];
}

const techIconMap: { [key: string]: JSX.Element } = {
  "Node.js": <FaNodeJs className="text-xl text-green-500" />,
  "Express.js": <SiExpress className="text-xl text-gray-500" />,
  PostgreSQL: <SiPostgresql className="text-xl text-blue-500" />,
  SQL: <FaDatabase className="text-xl text-orange-500" />,
  "RESTful APIs": <IoIosCodeWorking className="text-xl text-blue-400" />,
  JavaScript: <FaJs className="text-xl text-yellow-500" />,
  TypeScript: <SiTypescript className="text-xl text-blue-600" />,
  React: <FaReact className="text-xl text-blue-500" />,
  "React Native": <FaReact className="text-xl text-blue-400" />,
  Ionic: <SiIonic className="text-xl text-blue-500" />,
  Git: <FaGitAlt className="text-xl text-red-500" />,
  GitHub: <SiGithub className="text-xl text-black" />,
  Postman: <SiPostman className="text-xl text-orange-500" />,
  Figma: <FaFigma className="text-xl text-pink-500" />,
  NestJS: <SiNestjs className="text-xl text-red-500" />,
  Jenkins: <SiJenkins className="text-xl text-white" />,
  Docker: <SiDocker className="text-xl text-blue-500" />,
  "Google Cloud": <SiGooglecloud className="text-xl text-blue-400" />,
  AWS: <SiAmazonaws className="text-xl text-yellow-500" />,
};

export const ExperienceCard = ({
  company,
  date,
  tasks,
  techStack,
}: ExperienceCardProps) => {
  return (
    <div className="p-6 transition duration-500 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <IoIosCodeWorking className="text-3xl text-blue-400" />
        <h3 className="ml-3 text-xl font-semibold text-white">{company}</h3>
      </div>
      <time className="block mb-4 font-normal leading-none text-gray-400">
        {date}
      </time>
      <div>
        <h4 className="flex items-center mb-2 font-semibold text-white">
          <MdOutlineTask className="mr-2 text-2xl" /> Tareas Realizadas:
        </h4>
        <ul className="space-y-2 font-normal text-gray-300 list-none list-inside">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">-</span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="mb-2 font-semibold text-white">
          Tecnologías Utilizadas:
        </h4>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-1 text-gray-300 bg-gray-700 rounded-lg shadow-md"
            >
              {techIconMap[tech]}
              <span className="ml-2">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
