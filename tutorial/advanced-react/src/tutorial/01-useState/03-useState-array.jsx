import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              type='button'
              className='btn'
              onClick={() => removePerson(id)}
            >
              Remove Person
            </button>
          </div>
        );
      })}
      <button
        type='button'
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        Remove All Persons
      </button>
    </div>
  );
};

export default UseStateArray;
