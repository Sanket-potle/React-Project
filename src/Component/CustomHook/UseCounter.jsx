import { useState } from "react";

export const UseCounter = (value = 0) => {
  const [count, setCount] = useState(value);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return [count, increment, decrement];
};
