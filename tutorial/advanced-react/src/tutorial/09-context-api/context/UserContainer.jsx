import { useAppContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useAppContext();
  return (
    <div class-name='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
