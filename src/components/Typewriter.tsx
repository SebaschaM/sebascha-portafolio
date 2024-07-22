import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
}

export const Typewriter = ({ words }: TypewriterProps) => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord(
        isDeleting
          ? fullText.substring(0, currentWord.length - 1)
          : fullText.substring(0, currentWord.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [currentWord, isDeleting, loopNum, typingSpeed, words]);

  return (
    <div className="typewriter-container">
      <div className="typewriter">
        <h2 className="text-xl text-gray-400 md:text-2xl">{currentWord}</h2>
      </div>
    </div>
  );
};
