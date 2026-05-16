import React, { useState } from 'react';
//import './Exp7.css';

function Exp7Count(props) {
  const msg = "Hello JS";

  const [branch, setBranch] = useState("B.Tech");
  const changeBranch = () => {
    setBranch("B.Tech (AIML)");
  };

  const [color, setColor] = useState('blue');
  const changeColor = () => {
    setColor(prev => (prev === 'blue' ? 'red' : 'blue'));
  };

  const [state, setState] = useState({
    name: "Abhay",
    age: 21
  });

  const mouseOver = () => {
    setState({
      ...state,
      name: "Vinay",
      age: 23
    });
  };

  const mouseOut = () => {
    setState({
      ...state,
      name: "Abhay",
      age: 21
    });
    changeColor();
  };

  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>{msg}</h1>

      <h2>Hello {props.HeadingText}</h2>

      <h2 
        onMouseOver={mouseOver} 
        onMouseOut={mouseOut} 
        style={{ color: color }}
      >
        Hello, My name is {state.name} and age is {state.age}
      </h2>

      <h3>My course is {branch}</h3>
      <button onClick={changeBranch} className='buttons'>Change Branch</button>

      <div>
        <h2>Change Count {count}</h2>
        <button className='buttons' onClick={increment}>+VE</button>
        <button className='buttons' onClick={decrement}>-VE</button>
        <button className='buttons' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Exp7Count;