import { useState, useEffect } from 'react';

const Example = () => {
  const [condition, setCondition] = useState(true);
  // if (condition) {
  //   // won't work
  //   const [state, setState] = useState(false);
  // }

  //useEffect should always be on the top
  useEffect(() => {
    console.log('hello there');
  }, []);

  if (condition) {
    return <h2>Hello There</h2>;
  }

  // This wont work
  // useEffect(() => {
  //   console.log('hello there');
  // }, []);

  return (
    <div>
      <h1>hello example</h1>
    </div>
  );
};

export default Example;
