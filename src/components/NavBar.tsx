import { FaUser, FaSuitcaseRolling, FaFolder, FaGlobe } from "react-icons/fa";
import { NavItem } from "./NavItem";
import { PiWebhooksLogoBold } from "react-icons/pi";

interface NavBarProps {
  isMobile: boolean;
}

const navItems = [
  { href: "#about", icon: <FaUser className="text-xl" />, label: "Profile" },
  {
    href: "#experience",
    icon: <FaSuitcaseRolling className="text-xl" />,
    label: "Experience",
  },
  {
    href: "#",
    icon: <PiWebhooksLogoBold className="text-3xl" />,
    label: "logo-page",
  },
  {
    href: "#projects",
    icon: <FaFolder className="text-xl" />,
    label: "Projects",
  },
  {
    href: "#technologies",
    icon: <FaGlobe className="text-xl" />,
    label: "Technologies",
  },
];

export const NavBar = ({ isMobile }: NavBarProps) => {
  return (
    <div
      className={`bg-[#1A202C]/60 backdrop-blur-md shadow-lg fixed ${
        isMobile
          ? "bottom-4 left-1/2 transform -translate-x-1/2 h-14 px-4 flex items-center justify-center"
          : "left-4 top-1/2 transform -translate-y-1/2 py-4 w-16 flex flex-col items-center justify-center"
      } z-50 rounded-3xl`}
    >
      <nav
        className={`flex ${
          isMobile ? "flex-row space-x-4" : "flex-col space-y-4"
        }`}
      >
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </div>
  );
};
