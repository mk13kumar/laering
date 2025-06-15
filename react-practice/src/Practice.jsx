import React , {  useCallback, useMemo, useState } from "react";
import Memo2Component from "./Memo2Compoent"
const MemoComponent = React.memo(Memo2Component)
function Praction (){
    const [count ,setCount]=useState(0)
     const valueOfUseMemo = useMemo(()=>{
        console.log( " heye i am useMemo function and i memoize value ",count)
        return count*2;
     },[])

    const handleCallBack = useCallback(()=>{
        console.log(" hello i am Callback function",count) 
    },[])
     
    return(
        <div>
          <MemoComponent count ="yes are you "/>
         <h1> UseMemo Value : {valueOfUseMemo}</h1> 
         <h2>Count : {count}</h2>
         <button onClick={()=>setCount(count+1)}> +count </button>
         <button onClick={ handleCallBack}>Hello back </button>
        </div>
    )

}
export default Praction;