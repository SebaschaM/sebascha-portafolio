import { FaReact, FaCss3Alt, FaDocker, FaGithub, FaGit } from "react-icons/fa";
import {
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiJenkins,
  SiLinux,
  SiNestjs,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import MaterialUIIcon from "../assets/MaterialUiIcon";

export const technologies = {
  Frontend: ["ReactJS", "Tailwind CSS", "Material UI"],
  Backend: ["NestJS", "Postman", "TypeScript"],
  DevOps: ["Jenkins", "Docker", "Linux"],
  Database: ["PostgreSQL", "SQL Server"],
  Tools: ["Git", "GitHub"],
} as const;

export const technologyIcons = {
  ReactJS: <FaReact />,
  "Tailwind CSS": <FaCss3Alt />,
  "Material UI": <MaterialUIIcon />,
  NestJS: <SiNestjs />,
  Postman: <SiPostman />,
  TypeScript: <SiTypescript />, //hace que
  Jenkins: <SiJenkins />,
  Docker: <FaDocker />,
  Linux: <SiLinux />,
  PostgreSQL: <SiPostgresql />,
  "SQL Server": <SiMicrosoftsqlserver />,
  Git: <FaGit />,
  GitHub: <FaGithub />,
};
