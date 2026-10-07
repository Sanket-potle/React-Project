import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./ProductsSlice";

const DisplayProduct = () => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.data);

  console.log("Products Data", product);

  const handleProduct = () => {
    dispatch(fetchProduct());
  };

  return (
    <>
      <button onClick={handleProduct}>On Click</button>

      {product.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>Price: ₹{item.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayProduct;
