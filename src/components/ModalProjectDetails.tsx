import { useState, useEffect } from 'react';

interface ModalProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const ModalProjectDetails = ({
  isOpen,
  onClose,
  title,
  description,
}: ModalProjectDetailsProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Duration should match the closing animation duration
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`relative w-11/12 max-w-md p-6 transform bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          isClosing ? 'fade-out' : 'fade-in'
        }`}
      >
        <button
          title="Close Modal"
          onClick={handleClose}
          className="absolute text-gray-500 top-3 right-3 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          {title}
        </h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <a className="block mb-4 text-center text-blue-500 hover:underline">
          Learn more
        </a>
        <button
          onClick={handleClose}
          className="w-full px-4 py-2 text-white bg-gray-700 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};
