import { UseCounter } from "./UseCounter";
import Counter2 from "./Counter2";

const counter = ()=>{
  const [count, increment, decrement] = UseCounter(40);
  return(
    <>
    <h3>Counter 1</h3>
    {count}
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <Counter2/>
    </>
  )
}

export default counter;