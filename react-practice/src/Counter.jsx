import { memo, useCallback, useEffect, useState } from "react";

const Counter =memo(()=>{
    const [data ,setData]=useState([])
    const [ count,sertCount]= useState(0);
    const increament = useCallback(()=>{
        console.log( "Increamnet Callback",count);
        sertCount((prevCount)=> prevCount +1);
    },[])
    const decreamnet = useCallback(()=>{
        console.log("Decreamnet Callback",count);
        sertCount((prevCount)=> prevCount -1);
    },[])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((jsonData)=>{
            console.log("Data fetched",jsonData);
            setData(jsonData);
        }
        )
        .catch((error)=> console.error("Error fetching data",error));
    },[])

    
  return(
    <>
    <div>
        <h2> Count : {count}</h2>
        <button onClick={increament}>Increament</button>
        <button onClick={decreamnet}>Decreament</button>
        <h3>Fetched Data:</h3>
        
          {data.map((user) => (
            <p key={user.id}>
              {user.name} - {user.email}
            </p>
          ))}
    
    </div>
    </>
  )  
})
 export default Counter;