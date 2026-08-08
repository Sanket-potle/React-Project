import { DataContext } from "./ContextApi";
import { useNavigate } from "react-router-dom";

const ContextApiChaptwo =() =>{
    const navigate = useNavigate();
    const HandleVicewdetails = (id) =>{

        console.log("ViewDetails:",id);
        navigate(`/viewdetails/${id}`);

    }
    return(
        <>
        <div>
        <DataContext.Consumer>
            {(product) => {
                // console.log("Products from ContextApiChaptwo:", product)
                if (!product || product.length === 0) {
                    // return <h4>Loading....</h4>
                    return<div className="loader"></div>
                }
                return(
                    <>
                {product.map((item)=>(
                 <>
                 <h2 key={item.id}>{item.title}</h2>
                <button onClick={()=>HandleVicewdetails(item.id)}>View Details</button>
                 </>
                 
                ))}
                    </>
                )
            }}
        </DataContext.Consumer>
        </div>
        </>
    )

}

export default ContextApiChaptwo;