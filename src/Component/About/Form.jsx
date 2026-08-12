import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    return (
        <>
            <form>
                <input type="text" placeholder="Type Your Name..." />
                <br />
                <input type="Password" placeholder="Type Your Password..." />
                <br />
                <input type="email" placeholder="Type Your Email..." />
            </form>
        </>
    )
}

export default Form;