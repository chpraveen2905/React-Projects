import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };
  sayHello();
  return (
    <div>
      <h1> value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default CodeExample;
