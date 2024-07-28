interface Project {
  name: string;
  description: string;
}

interface ModalProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export const ModalProjectDetails = ({
  project,
  onClose,
}: ModalProjectDetailsProps) => {
  return (
    <div>
      {project && (
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};
