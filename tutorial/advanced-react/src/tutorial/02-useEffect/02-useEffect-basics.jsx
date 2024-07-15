import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('say hello');
  };

  sayHello();

  useEffect(() => {
    console.log('Hello from useEffect');
  }, []);
  return (
    <div>
      <h1>Value: {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Here
      </button>
    </div>
  );
};

export default UseEffectBasics;
