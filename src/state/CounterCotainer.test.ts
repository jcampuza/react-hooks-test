import { CounterContainer } from './CounterContainer';

describe('CounterContainer', () => {
  it('initialize with a count of 0', () => {
    const counter = new CounterContainer();
    expect(counter.state.count).toEqual(0);
  });

  it('should increment the count', async () => {
    const counter = new CounterContainer();
    await counter.increment();
    expect(counter.state.count).toEqual(1);
  });

  it('should decrement the count', async () => {
    const counter = new CounterContainer();
    await counter.decrement();
    expect(counter.state.count).toEqual(-1);
  });
});
