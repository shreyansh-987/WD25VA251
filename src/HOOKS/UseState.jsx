import React, { useState, useEffect } from "react";

function UseState() {
  const [color, setColor] = useState("blue");

  const changeColor = () => {
    setColor(prev => (prev === "blue" ? "red" : "blue"));
  };

  const [count, setCount] = useState(0);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  const [time, setTime] = useState(0);

  // ✅ FIXED TIMER
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearTimeout(timer); 
  }, [time]);

  return (
    <>
      <h2>Hooks</h2>

      <p style={{ color: color }} onMouseOver={changeColor}>
        Hover to change color Content" (noun) refers to information, materials, or substances contained within something (e.g., website, book, container). It refers to substance over form, such as the ideas in a speech or the subject matter in a film. Synonyms include subject matter, material, substance, essence, and items
      </p>

      <h2>Counter {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

      <h2>Timer {time}</h2>
    </>
  );
}

export default UseState;







