import { DataContext } from "./ContextApi";
import { useNavigate } from "react-router-dom";

const ContextApiChaptwo = () => {
  const navigate = useNavigate();

  const HandleVicewdetails = (id) => {
    console.log("ViewDetails:", id);
    navigate(`/viewdetails/${id}`);
  };

  return (
    <>
      <div>
        <DataContext.Consumer>
          {(product) => {
            if (!product || product.length === 0) {
              return <div className="loader"></div>;
            }

            return (
              <>
                {product.map((item) => (
                  <div key={item.id}>
                    <h2>{item.title}</h2>

                    <button onClick={() => HandleVicewdetails(item.id)}>
                      View Details
                    </button>
                  </div>
                ))}
              </>
            );
          }}
        </DataContext.Consumer>
      </div>
    </>
  );
};

export default ContextApiChaptwo;
