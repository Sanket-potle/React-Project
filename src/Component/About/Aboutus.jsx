import { useState } from "react";
import ContextApiChaptwo from "../ContextAPI/ContextApiChaptwo";
import Testusestate from "./Testusestate";
import Form from "./Form";
import Submitform from "../Form/Submitform";
import Submitform2 from "../Form/Submitform2";
import Checkboes from "../Form/Checkboxes";

const Aboutpage = () => {

    const [count, setCount] = useState(0);
    // console.log('TotalCount:',count);
    return (
        <>

            {/* <button onClick={()=> setCount(count + 1)}>Ok</button> */}
            {/* <ContextApiChaptwo /> */}
            {/* <Testusestate /> */}
            <Form />
            <Submitform />
            <Submitform2 />
            <Checkboes/>

        </>
    )
}
export default Aboutpage;