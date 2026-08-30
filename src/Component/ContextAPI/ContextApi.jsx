import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import ProductCalltwo from "./ProductCalltwo";


// Context API 
// Create, Provide, Consumer

const DataContext = createContext();
const ContextApi = ({ children }) => {
  const [product, setProduct] = useState([]);

  // console.log("Products:", product);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products"
        );

        setProduct(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <h1>Product List</h1> */}

      {/* {product.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h2>{item.title}</h2>
          
        </div>
      ))} */}
      <DataContext.Provider value={product}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default ContextApi;
export { DataContext };