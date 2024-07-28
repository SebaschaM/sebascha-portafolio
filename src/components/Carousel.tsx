import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { projects } from "../seed/projects";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  let featuredProjects = projects.slice(0, 3);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-full overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-full min-w-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
                detailsLink={project.detailsLink}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-30 flex space-x-2 -translate-x-1/2 bottom-4 left-1/2 rtl:space-x-reverse">
        {featuredProjects.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute z-30 flex items-center justify-center p-2 -translate-y-1/2 rounded-full cursor-pointer top-1/2 left-2 bg-white/30 group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full outline-none dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 focus:ring-2 focus:ring-white dark:focus:ring-gray-800/70">
          <FaCaretLeft className="text-xl text-white rtl:rotate-180" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute z-30 flex items-center justify-center p-2 -translate-y-1/2 rounded-full cursor-pointer top-1/2 right-2 bg-white/30 group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full outline-none dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 focus:ring-2 focus:ring-white dark:focus:ring-gray-800/70">
          <FaCaretRight className="text-xl text-white rtl:rotate-180" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
