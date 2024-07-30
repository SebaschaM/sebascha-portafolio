import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import MaterialUIIcon from "../assets/MaterialUiIcon";
import { IconType } from "react-icons";

export const selectedTechnologies = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  {
    name: "Material UI",
    icon: MaterialUIIcon as IconType,
  },
] as const;
