import { useEffect, useState } from "react";
import "./App.css";
function UseE() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(" component renderd");
  }, []); // one time render ofter page mount

  useEffect(() => {
    console.log(" Count  Update :", count);
  }, [count]);
  // when it render them changed by state

  useEffect(() => {
    console.log(" component Unmount");
  });
  // it call every render

  return (
    <>
      <h1> count : {count}</h1>
      <button onClick={() => setCount(count + 1)}> +1</button>
    </>
  );
}

export default UseE;
