import { useState,useCallback } from "react";
const UseCallBack = () => {
  // const [text, setText] = useState("");
  const [count,setCount]=useState(0)

  // const handleInput = (e)=>{
  //    setText(e.target.value)
  // }

   const handleCallback =useCallback(() => {
  console.log("Button clicked",count);
  },[count])


  return (
    <div>
      {/* <input
        type="text"
        value={text}
        onChange={handleInput}
      /> */}
      <button onClick={handleCallback}> button</button>

      <br />
      <br/>
      <h1> Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Count +</button>
    </div>
  );
};

export default UseCallBack;
