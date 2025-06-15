import  React, {useState } from "react";
import MemoizedComponent from "./MemoizedComponent";


const RectMemoizedComponent = React.memo(MemoizedComponent)


// const MemoizedComponent = React.memo(({ name }) => {
//   console.log("Rendring...");
//   return <h2> Hello {name}</h2>;
// });
const MEmo = () => {
 const [ count,setCount] =useState(0)
  return (
    <>
      <RectMemoizedComponent name={count}/>
      <button onClick={()=>setCount(count+1)}> count: {count}</button>
    </>
  );
};

export default MEmo;
