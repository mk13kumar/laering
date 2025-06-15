import React, { useState, useEffect, useRef } from "react";
import Childd from "./Childd";
 const MemoChild = React.memo(Childd);
function ControlleForm() {
  const [text, setText] = useState("");
  const [items, setItem] = useState([]);
  const [count, setCount] = useState(0);
   
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setItem([...items, text]);
      setText("");
    } else {
      alert("pehle form bharle bhai fir Submit krna ....");
    }
  };

  useEffect(() => {
    console.log("heye I am useEffect", count);
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  const inputRef = useRef();
  const hideDiv = () => {
    inputRef.current.style.display = "none";
  };
  const showDiv = () => {
    inputRef.current.style.display = "block";
  };



  return (
    <>
      <div>
         
        <button onClick={showDiv}> tigger ref</button>

        <div ref={inputRef}>
          <h1> i am useRef </h1>
          <MemoChild name="munish" />

          <button onClick={hideDiv}>button</button>
        </div>

        <h2>stata with useFffect:{count}</h2>
        <button onClick={handleCount}> +count</button>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit"> Submit</button>
        </form>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
}
export default ControlleForm;
