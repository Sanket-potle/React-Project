import ContextApi from "../ContextAPI/ContextApi";
import Userobject from "../ContextAPI/Userobject";
import Lecture6 from "../Lecture6/Lecture6";
import ProductCall from "../UseEffect/ProductCall";

function Homepage() {
    return (
        <>

            {/* <ProductCall/> */}
            <ContextApi />
            {/* <ProductCall /> */}
            <Lecture6 />
            <Userobject />

        </>

    )
}

export default Homepage;