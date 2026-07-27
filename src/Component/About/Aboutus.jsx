import { useState } from "react";

const Aboutpage = () => {
    
    const [count, setCount]=useState(0);
    console.log('TotalCount:',count);
    return (
        <>
          
            <button onClick={()=> setCount(count + 1)}>Ok</button>
        </>
    )
}
export default Aboutpage;