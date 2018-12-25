import { useState, useEffect } from 'react';

/**
 * hook that will provide the current time to a component, and update between ticks of the passed in updatePeriod.
 * @param updatePeriod - How long to wait between each tick
 */
export function useCurrentDate(updatePeriod: number = 1000) {
  const [date, setDate] = useState(new Date());

  useEffect(
    () => {
      const interval = setInterval(() => setDate(new Date()), updatePeriod);

      return () => clearInterval(interval);
    },
    [updatePeriod]
  );

  return date;
}
