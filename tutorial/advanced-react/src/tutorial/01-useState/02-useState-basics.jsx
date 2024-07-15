import { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };
  return (
    <div>
      <h4>You Clicked {count}</h4>
      <button type='button' className='btn' onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default UseStateBasics;
