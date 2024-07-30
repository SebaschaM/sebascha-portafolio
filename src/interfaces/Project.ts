import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies: Technologies[];
}

export interface Technologies {
  name: string;
  icon: IconType;
}
