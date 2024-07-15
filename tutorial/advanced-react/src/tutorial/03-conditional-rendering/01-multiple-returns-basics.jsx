import { useState, useEffect } from 'react';

const MultipleReturnBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>multiple return app</h2>;
};

export default MultipleReturnBasics;
