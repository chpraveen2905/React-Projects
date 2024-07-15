import { useState, useEffect } from 'react';

const CleanUpFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
      <h1></h1>
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const intId = setInterval(() => {
      console.log('hello from Interval');
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intId);
  }, []);
  return <h1>Hello There</h1>;
};

export default CleanUpFunction;
