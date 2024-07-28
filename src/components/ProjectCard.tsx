import { FaEye } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  detailsLink: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const ProjectCard = ({
  title,
  imageUrl,
  link,
  detailsLink,
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
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition duration-300 group-hover:bg-black/70">
        <h2 className="mb-4 text-lg font-bold text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {title}
        </h2>
        <div className="flex space-x-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <a
            href={link}
            className="flex items-center justify-center px-4 py-2 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            <FaEye className="mr-2" />
            Ver
          </a>
          <a
            href={detailsLink}
            className="flex items-center justify-center px-4 py-2 font-bold text-center text-white bg-gray-500 rounded hover:bg-gray-700"
          >
            Más Detalles
          </a>
        </div>
      </div>
    </div>
  );
};
