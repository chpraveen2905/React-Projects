import { useState, useEffect } from 'react';

const MultipleEffect = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('Hello from the first UseEffect');
  }, [value]);

  useEffect(() => {
    console.log('Hello from the Second UseEffect');
  }, [secondValue]);
  return (
    <div>
      <h1>value: {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Value
      </button>
      <br />
      <hr />
      <h1>Second Value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        Second Value
      </button>
    </div>
  );
};

export default MultipleEffect;
