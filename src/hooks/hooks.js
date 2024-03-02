import { useEffect, useState } from "react";

export const useDebounce = (initialValue, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(initialValue), delay);
    return () => clearTimeout(timer);
  }, [initialValue, delay]);
  return debouncedValue;
};
