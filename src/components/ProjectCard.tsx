import { FaEye } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  detailsLink: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ProjectCard = ({
  title,
  imageUrl,
  link,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) => {
  return (
    <div
      className="relative flex flex-col w-full h-full overflow-hidden rounded-lg cursor-pointer group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative flex items-center justify-center w-full transition duration-300 bg-black h-100 group-hover:brightness-75">
        <img
          className="object-contain w-full h-full"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition duration-300 group-hover:bg-black/70">
        <h2 className="mb-2 text-sm font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 sm:mb-4 sm:text-lg">
          {title}
        </h2>
        <div className="flex space-x-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100 sm:space-x-2">
          <a
            href={link}
            className="flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded sm:px-4 sm:py-2 sm:text-base hover:bg-blue-700"
          >
            <FaEye className="mr-1 sm:mr-2" />
            Ver
          </a>
          <button
            //            onClick={onDetailsClick}
            className="flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-gray-500 rounded sm:px-4 sm:py-2 sm:text-base hover:bg-gray-700"
          >
            Más Detalles
          </button>
        </div>
      </div>
    </div>
  );
};
