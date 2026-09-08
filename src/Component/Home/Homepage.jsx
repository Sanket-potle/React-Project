import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/CounterSlice.jsx";

const Homepage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.count);
  console.log("Data", data);
  const handleIncrement = () => {
    dispatch(increment());
    // console.log("Incremented Data", increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <h1>Homepage</h1>
      {data}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      {/* <ProductCall/> */}
      {/* <ContextApi /> */}
      {/* <ProductCall /> */}
      {/* <Lecture6 /> */}
      {/* <Userobject /> */}
      <h1>{}</h1>
    </>
  );
};

export default Homepage;
