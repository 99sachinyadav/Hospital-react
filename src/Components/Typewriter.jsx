import { useEffect, useState } from "react";

const Typewriter = ({ message = "", onDone }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  const lines = message.split("\n");

  useEffect(() => {
    if (lineIndex >= lines.length) {
      if (onDone) onDone();
      return;
    }

    let charIndex = 0;
    const line = lines[lineIndex];
    const interval = setInterval(() => {
      if (charIndex <= line.length) {
        setDisplayedText((prev) => {
          const currentLines = prev.split("\n");
          currentLines[lineIndex] = line.slice(0, charIndex);
          return currentLines
            .concat(lines.slice(lineIndex + 1).map(() => ""))
            .join("\n");
        });
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLineIndex((prev) => prev + 1);
        }, 400); // Pause before next line
      }
    }, 30); // Typing speed

    return () => clearInterval(interval);
  }, [lineIndex]);

  return (
    <pre style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" ,fontSize:"1.2rem"}}>
      {displayedText}
    </pre>
  );
};

export default Typewriter;