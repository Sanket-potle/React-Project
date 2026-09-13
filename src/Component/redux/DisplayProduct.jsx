import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./ProductsSlice";
import { useEffect } from "react";

const DisplayProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log("Products Data", product);

  useEffect(()=>{
    
  })
  return (
    <>
      <button onClick={() => handleProduct()}></button>;
    </>
  );
};

export default DisplayProduct;
