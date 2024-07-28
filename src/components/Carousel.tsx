import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { projects } from "../seed/projects";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-full min-w-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-30 flex space-x-2 -translate-x-1/2 bottom-2 left-1/2 rtl:space-x-reverse">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer start-0 group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaCaretLeft className="text-xl text-white rtl:rotate-180" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer end-0 group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaCaretRight className="text-xl text-white rtl:rotate-180" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
