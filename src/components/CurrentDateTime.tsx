import React, { useState } from 'react';
import { useCurrentDate } from '../hooks/useCurrentDate';

export function CurrentDateTime() {
  const [tickInterval, setTickInterval] = useState(1000);
  const date = useCurrentDate(tickInterval);

  const handleTickUpdate = (ms: number) => () => setTickInterval(ms);

  return (
    <div>
      <h4>useCurrentDate</h4>
      <p>
        This component uses a custom hook <code>useCurrentDate</code>. It will
        update every once in a while to provide the current date. You can find
        it in <code>src/components/CounterHook</code>
      </p>

      <span>{date.toLocaleString()}</span>

      <div>
        <p>Try Updating the tick period to see the time between ticks change</p>
        <button onClick={handleTickUpdate(1000)}>1s</button>
        <button onClick={handleTickUpdate(2000)}>2s</button>
        <button onClick={handleTickUpdate(5000)}>5s</button>
        <button onClick={handleTickUpdate(10000)}>10s</button>
      </div>
    </div>
  );
}
