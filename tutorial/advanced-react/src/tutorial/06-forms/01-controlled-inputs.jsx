import { useState } from 'react';

const ControlledInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
        />
      </div>

      <button type='submit' className='btn btn-block'>
        Submit
      </button>
    </form>
  );
};

export default ControlledInput;
