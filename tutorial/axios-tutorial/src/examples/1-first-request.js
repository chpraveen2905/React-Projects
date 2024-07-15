import { useEffect } from 'react';
import axios from 'axios';

const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {
  console.log('hi');
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>First Request</h2>;
};

export default FirstRequest;
