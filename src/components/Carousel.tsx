import { useState } from "react";

export const Carousel = () => {
  const images = [
    "https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg",
    "https://taxonomiaanimal.wordpress.com/wp-content/uploads/2018/03/caballeishon.jpg?w=640",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzpSJgUHOjeymEs0gcvGl3RkwBW_jaZx5MQ&s",
    "https://antipode-peru.com/info/le-caballo-de-paso-1.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgU9cILYlnLbSJ7q18cnFOSUYJY-OjQHGovZGgVZ94fpH8_wheN5id6Bv2n8e5Bx_sDY&usqp=CAU",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-300 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img className="object-cover w-full h-full" src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
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
        className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
