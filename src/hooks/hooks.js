import axios from "axios";
import { useEffect, useState } from "react";

export const useDebounce = (initialValue, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(initialValue), delay);
    return () => clearTimeout(timer);
  }, [initialValue, delay]);
  return debouncedValue;
};

export const useFetch = (url, method) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: method,
        url: url,
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return { data, loading, error };
};
