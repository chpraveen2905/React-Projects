import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'
const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDataJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      console.log(data);
      setJoke(data.joke);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDataJoke}>
        Random Joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};

export default Headers;
