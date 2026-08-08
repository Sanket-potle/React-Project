import { useState } from "react";
import ContextApiChaptwo from "../ContextAPI/ContextApiChaptwo";

const Aboutpage = () => {
    
    const [count, setCount]=useState(0);
    // console.log('TotalCount:',count);
    return (
        <>
          
            {/* <button onClick={()=> setCount(count + 1)}>Ok</button> */}
            <ContextApiChaptwo/>
        </>
    )
}
export default Aboutpage;