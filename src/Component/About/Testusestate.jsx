import { useState } from "react";

const Testusestate = () => {
    // const [count, setCount] = useState(0);
    const [name, setName] = useState("Sanket Potle");
    const Textshow = (n) => {
        setName(n.target.value)
    }
    // console.log('TesxtShow', Textshow);     
    return (
        <>
            {/* Task 1 */}
            {/* <h3>{count}</h3>
            <br></br>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button> */}

            {/* Task 2 */}
            <input type="text" value={name} placeholder="Type Your Name..." onChange={Textshow} />
            <h3>{name}</h3>
            <button onClick={() => setName("")}>Clear</button >
        </>
    )
}

export default Testusestate;