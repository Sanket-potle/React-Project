import axios from "axios";
import { useEffect, useState } from "react";
import UseViewDetails from "../CustomHook/UseViewDetails";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        console.log("Product123", response.data.products);

        setProduct(response.data.products);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchProduct();
  }, []);

  const handleViewDetails = (id) => {
    console.log("Navigating.......", id);
  };

  return (
    <>
      {product.map((elem) => (
        <div key={elem.id}>
          <h2>{elem.title}</h2>

          <UseViewDetails onClick={() => handleViewDetails(elem.id)} />
        </div>
      ))}
    </>
  );
};

export default Product;
