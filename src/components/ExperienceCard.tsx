import { IoIosCodeWorking } from "react-icons/io";

interface ExperienceCardProps {
  company: string;
  date: string;
  tasks: string[];
}

export const ExperienceCard = ({
  company,
  date,
  tasks,
}: ExperienceCardProps) => {
  return (
    <div className="p-6 transition duration-500 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <IoIosCodeWorking className="text-3xl text-blue-400" />
        <h3 className="ml-3 font-semibold text-white text-subtitle3">{company}</h3>
      </div>
      <time className="block mb-2 font-normal leading-none text-gray-400 text-normal">
        {date}
      </time>
      <ul className="space-y-2 font-normal text-gray-300 list-disc list-inside text-normal">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
