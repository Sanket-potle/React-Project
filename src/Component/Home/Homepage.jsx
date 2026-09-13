import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/CounterSlice.jsx";
import { changeName } from "../redux/UserNameSlice.jsx";
import DisplayProduct from "../redux/DisplayProduct.jsx";

const Homepage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.userName);

  const handleClick = () => {
    dispatch(changeName());
  };
  return (
    <>
      <h1>Change Name: {data}</h1>

      <button onClick={handleClick}>Change Name</button>

      <h1>Homepage</h1>
      {/* {data} */}
      {/* <button onClick={handleIncrement}>Increment</button> */}
      {/* <button onClick={handleDecrement}>Decrement</button> */}
      <br />
      {/* <ProductCall/> */}
      {/* <ContextApi /> */}
      {/* <ProductCall /> */}
      {/* <Lecture6 /> */}
      {/* <Userobject /> */}
      {/* <h1>Name : {userName}</h1> */}
      <DisplayProduct />
    </>
  );
};

export default Homepage;
