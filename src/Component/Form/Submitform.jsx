import { useEffect, useRef, useState } from "react";

const Submitform = () => {
  const domElemet = useRef();
  const [name, setName] = useState("");
  // console.log("name123", name);
  const [lname, setLName] = useState("");
  // console.log("lname", lname);
  const handleForm = (e) => {
    if (e.target.name === "fname") {
      setName(e.target.value);
      domElemet.current.style.color = "red"
    } else if (e.target.name === "lname") {
      setLName(e.target.value);
      domElemet.current.style.color = "blue"
    }
  };
  useEffect(() => {
    domElemet.current.focus();
  }, []);
  return (
    <>
      <form action="">
        <label> FName</label>
        <input
          ref={domElemet}
          type="text"
          placeholder="Type first name"
          name="fname"
          value={name}
          onChange={handleForm}
        />
        
        <input
          ref={domElemet}
          type="text"
          placeholder="Type last name"
          name="lname"
          value={lname}
          onChange={handleForm}
        />
      </form>
    </>
  );
};
export default Submitform;
