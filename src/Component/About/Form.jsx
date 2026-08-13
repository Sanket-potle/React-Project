import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    return (
        <>
            <form>
                <input type="text" value={name} placeholder="Type Your Name..." onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="Password" value={password} placeholder="Type Your Password..." onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="email" value={email} placeholder="Type Your Email..." onChange={(e) => setEmail(e.target.value)} />
            </form>
            <h2>{name}</h2>
            <p>{password}</p>
            <h5>{email}</h5>
            <button onClick={() => { setName(""); setPassword(''); setEmail('') }}>Clear</button>
        </>
    )
}

export default Form;