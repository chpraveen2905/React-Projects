import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUsers(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>There was an Error...</h1>;
  }

  const { avatar_url, name, company, bio } = users;
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default MultipleReturnsFetchData;
