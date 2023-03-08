import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem(key);

    const isNull = savedData !== null ? savedData : defaultValue;

    return isNull;
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
};
