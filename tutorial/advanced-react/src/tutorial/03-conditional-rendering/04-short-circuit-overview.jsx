import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('susan');

  const codeExample = text || 'hello world';

  return (
    <div>
      <h4>FALSY OR: {text || 'hello world'}</h4>
      <h4>FALSY AND: {text && 'hello world'}</h4>
      <h4>TRUTHY OR: {name || 'hello world'}</h4>
      <h4>TRUTHY AND: {name && 'hello world'}</h4>
      {codeExample}
    </div>
  );
};

export default ShortCircuitOverview;
