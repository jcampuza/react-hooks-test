import React, { useState } from 'react';

export function CounterHook() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h4>useState</h4>
      <p>
        This Counter uses the <code>useState</code> hook, you can find it in{' '}
        <code>src/components/CounterHook</code>
      </p>
      <span style={{ marginRight: 12 }}>{count}</span>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}
