import React, {useState, useEffect} from "react";

export const TypingEffect = ({text, speed = 100, repeat = 0}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (repeat > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, repeat * 1000);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, repeat]);

  return <div>{displayedText}</div>;
};
