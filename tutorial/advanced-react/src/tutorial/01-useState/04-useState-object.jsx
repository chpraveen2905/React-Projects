import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'praveen',
    age: 30,
    occupation: 'software Engineer',
  });

  const changePerson = () => {
    setPerson({
      name: 'peter',
      age: 45,
      occupation: 'Mechanical Engineer',
    });
    // be careful, don't overwrite
    // setPerson({ name: 'susan' });
    // setPerson({ ...person, name: 'susan' });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h4>Occupation: {person.occupation}</h4>

      <button className='btn' type='button' onClick={changePerson}>
        Change Person
      </button>
    </div>
  );
};

export default UseStateObject;
