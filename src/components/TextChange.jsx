import React, { useEffect, useMemo, useState } from 'react';

const TextChange = () => {
  const texts = useMemo(() =>
    ["I'm Kachingprue Marma",
      "I'm Coder",
      "I'm Programmer",
      "I'm Web Developer",
      "I'm Full-stack Developer",
      "I'm Software Developer"], []);

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false)
      }
      if (endValue < 2.1) {
        setIsForward(true)
        setIndex((prev) => (prev + 1) % texts.length)
      }
    }, 50)
    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts])
  return (
    <div className='transition ease duration-300'>{currentText}
      <span className="blinking-cursor">|</span>
    </div>)
};

export default TextChange;