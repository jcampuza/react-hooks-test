import React from 'react';
import { useSynchronizedState } from '../hooks/useSynchronizedState';

export function SynchronizedCounter() {
  const [count, setCount] = useSynchronizedState<number>(
    'count',
    v => parseInt(v),
    0
  );

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h4>useSynchronizedState</h4>
      <p>
        This Counter uses a custom hook that synchronizes with localStorage
        called <code>useSynchronizedState</code>, you can find it in{' '}
        <code>src/components/SynchronizedCounter</code>
      </p>
      <span style={{ marginRight: 12 }}>{count}</span>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}
