import { UseCounter } from "./UseCounter";

const counter = () => {
  const [count, increment, decrement] = UseCounter(30);
  return (
    <>
      <h3>Counter 2</h3>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default counter;
