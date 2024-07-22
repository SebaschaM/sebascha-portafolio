interface NavItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

export const NavItem = ({ href, icon, label }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center justify-center w-10 h-10 text-gray-400 transition-colors duration-300 hover:text-gray-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};
