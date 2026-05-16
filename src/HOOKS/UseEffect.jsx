import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

function UseEffect() {

  const [timer, setTimer] = useState(0);

  // ✅ Fixed Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <>
      <h2>UseEffect</h2>

      <h3>Timer {timer}</h3>

      <div className="d-flex flex-column align-items-center">
        <h3>Counter {count}</h3>

        <Button 
          onClick={() => setCount(prev => prev + 1)} 
          variant="success" 
          className='my-2 w-50'
        >
          +
        </Button>

        <Button 
          onClick={() => setCount(prev => prev - 1)} 
          variant="secondary" 
          className='my-2 w-50'
        >
          -
        </Button>
      </div>
    </>
  )
}

export default UseEffect;