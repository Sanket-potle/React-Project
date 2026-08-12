import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const ViewDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams()

  console.log('id12222222', id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        console.log('response:', response.data)
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* {product.price} */}
    </div>
  )
}

export default ViewDetails;
