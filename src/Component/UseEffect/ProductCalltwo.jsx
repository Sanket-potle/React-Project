import ProductCall from "./ProductCall";
import ProductCallthree from "./ProductCallthree";

const ProdctCalltwo = (product) => {
    console.log('propsTest', product)
    return(
        <>
        <ProductCallthree product={product}/>
        </>
    )
}
export default ProdctCalltwo;