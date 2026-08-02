import { DataContext } from "./ContextApi";

const ContextApiChaptwo =() =>{
    return(
        <>
        <div>
        <DataContext.Consumer>
            {(product) => {
                console.log("Products from ContextApiChaptwo:", product)
                if (!product || product.length === 0) {
                    // return <h4>Loading....</h4>
                    return<div className="loader"></div>
                }
                return(
                    <>
                {product.map((item)=>(
                 <h2 key={item.id}>
                    {item.title}
                 </h2>
                 
                ))}
                <button onClick={()=>HandleVicewdetails(iem.id)}></button>
                    </>
                )
            }}
        </DataContext.Consumer>
        </div>
        </>
    )

}

export default ContextApiChaptwo;