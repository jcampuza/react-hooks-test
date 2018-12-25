import { useState } from 'react';

/**
 * Hook that grabs a value from a localStorage key and uses that as the initial state for the useState hook.
 * It will from then on keep the state synchronized with localStorage.
 */
export function useSynchronizedState<T>(
  key: string,
  parseInitialValue: (v: string) => T,
  initialValueIfNull: T
): [T, (v: T) => void] {
  // Get item from storage
  const storageValue = localStorage.getItem(key);

  // If the item existed, use it, otherwise default to null value
  const initialValue = storageValue
    ? parseInitialValue(storageValue)
    : initialValueIfNull;

  const [value, setValue] = useState<T>(initialValue);

  // Pass overridden setState method that will set the item in storage
  const setState = (v: T): void => {
    setValue(v);
    localStorage.setItem(key, JSON.stringify(v));
  };

  return [value, setState];
}
