import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import MaterialUIIcon from "../assets/MaterialUiIcon";
import { IconType } from "react-icons";

export const selectedTechnologies = [
  {
    name: "React",
    icon: FaReact,
    color: "#61dafb"
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#38bdf8"
  },
  {
    name: "Material UI",
    icon: MaterialUIIcon as IconType,
    color: "#007FFF"
  },
] as const;
