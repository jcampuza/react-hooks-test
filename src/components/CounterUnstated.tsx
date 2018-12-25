import React from 'react';
import { Subscribe } from 'unstated';
import { CounterContainer } from '../state/CounterContainer';

export function CounterUnstated() {
  return (
    <Subscribe to={[CounterContainer]}>
      {(counter: CounterContainer) => (
        <div>
          <p>
            This Counter uses Unstated, you can find it in{' '}
            <code>src/components/CounterUnstated</code>
          </p>
          <span style={{ marginRight: 12 }}>{counter.state.count}</span>
          <button onClick={counter.increment}>Increase</button>
          <button onClick={counter.decrement}>Decrease</button>
        </div>
      )}
    </Subscribe>
  );
}
