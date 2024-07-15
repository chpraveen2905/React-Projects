import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      {user ? (
        <div>
          <h1>Hello There, {user.name}</h1>
          <button className='btn' onClick={() => setUser(null)}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button
            className='btn'
            onClick={() =>
              setUser({
                name: 'john',
              })
            }
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
