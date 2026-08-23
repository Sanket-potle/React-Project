import { DataContext } from "./ContextApi";
import { useViewDetails } from "../CustomHook/useViewDetails";

<<<<<<< Updated upstream
const ContextApiChaptwo = () => {
    const navigate = useNavigate();
    const HandleVicewdetails = (id) => {

        console.log("ViewDetails:", id);
        navigate(`/viewdetails/${id}`);

    }
    return (
        <>
=======
<<<<<<< HEAD
const ContextApiChaptwo =() =>{
    const viewDetails = useViewDetails();
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
                <button onClick={() => viewDetails(item.id)}>View Details</button>
                 </>
                 
                ))}
                    </>
                )
            }}
        </DataContext.Consumer>
        </div>
=======
const ContextApiChaptwo = () => {
    const navigate = useNavigate();
    const HandleVicewdetails = (id) => {

        console.log("ViewDetails:", id);
        navigate(`/viewdetails/${id}`);

    }
    return (
        <>
>>>>>>> Stashed changes
            <div>
                <DataContext.Consumer>
                    {(product) => {
                        // console.log("Products from ContextApiChaptwo:", product)
                        if (!product || product.length === 0) {
                            // return <h4>Loading....</h4>
                            return <div className="loader"></div>
                        }
                        return (
                            <>
                                {product.map((item) => (
                                    <>
                                        <h2 key={item.id}>{item.title}</h2>
                                        <button onClick={() => HandleVicewdetails(item.id)}>View Details</button>
                                    </>

                                ))}
                            </>
                        )
                    }}
                </DataContext.Consumer>
            </div>
<<<<<<< Updated upstream
=======
>>>>>>> af5915888c2bdc2a4b881e2193c987f7426ffd26
>>>>>>> Stashed changes
        </>
    )

}

export default ContextApiChaptwo;