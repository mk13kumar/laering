import { useState } from "react";

function ControlledForm() {
  const [inValue, setInValue] = useState("");
  const [item, setItem] = useState([]);
   
//   const handleInput=(e)=>{
//     setInValue(e.target.value)
//   }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inValue) {
      setItem([...item, inValue]);
      setInValue("");
    } else {
      alert("please fill form");
    }
  };

  return (
    <div>
      <h2>Controll component</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inValue}
          onChange={(e)=>setInValue(e.target.value)}
          placeholder="Type something"
        />
        <button type="submit"> Submit</button>
      </form>
      <ul>
        {item.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ControlledForm;
