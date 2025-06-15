import  { useMemo, useState } from 'react';
const UseMemo = () => {
 const [ count ,setCount]= useState(0)
 const doubled =useMemo(()=>{
   console.log(" Calculating double",count)
   return count *2;
 },[])
  return (
    <>
    <div>
        <h2> count :{count}</h2>
          <h3> Double :{doubled}</h3>
        <button onClick={()=> setCount(count+1)}> + Count</button>
    </div>
    </>
  )
}

export default UseMemo;