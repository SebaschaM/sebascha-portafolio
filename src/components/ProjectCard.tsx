interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }
  
  export const ProjectCard = ({
    title,
    description,
    imageUrl,
    link,
  }: ProjectCardProps) => {
    return (
      <div className="relative flex flex-col w-full h-full overflow-hidden rounded-lg shadow-lg">
        <div className="relative flex items-center justify-center w-full bg-black h-96">
          <img className="object-contain h-full" src={imageUrl} alt={title} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black via-transparent to-transparent">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <p className="text-sm text-gray-200">{description}</p>
          <a
            href={link}
            className="inline-block w-full px-4 py-2 mt-2 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            View Project
          </a>
        </div>
      </div>
    );
  };