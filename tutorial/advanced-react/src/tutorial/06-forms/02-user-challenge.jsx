import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) return;

    const fakeId = Date.now();
    console.log(fakeId);

    const newUser = { id: fakeId, name };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    setName('');
  };

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
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
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
      <h2>Users</h2>
      <br />
      <hr />

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className='btn' onClick={() => removeUser(user.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
