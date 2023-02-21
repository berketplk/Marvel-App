import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.get(url);
      console.log("sssss");
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.log("ERROR+++++",error)
    }
   
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return {data, loading};
}

export default useFetch;
