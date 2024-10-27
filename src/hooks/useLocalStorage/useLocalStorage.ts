import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize state with value from localStorage or default to initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Update localStorage whenever the state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, storedValue]);

  // Return a stateful value and a setter function
  return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;
