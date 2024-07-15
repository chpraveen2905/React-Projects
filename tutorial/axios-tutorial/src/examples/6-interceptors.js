import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const Interceptors = () => {
  const fetchData = async () => {
    console.log('axios interceptors');
    try {
      const resp = await authFetch('/react-store-products');
      console.log(resp);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
