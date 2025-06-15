import { useState } from "react"

const ToggleComponent=()=>{
    const [show,setShow]=useState(true)
    const handleToggle=()=>{
      setShow(true)   
      
      
    }
    const handleHide=()=>{
      setShow(false)    
    }

    const arr = [
        {id :1,name : "munish" },
        {id :2,name : "munish" },
        {id :3,name : "munish" },
        {id :4,name : "munish" }

      ]
    return(
   <>
   <div>
    <button onClick={handleToggle}> show</button>
   
    { show &&(
     <div>
       <h1> Hello i am box</h1>
       {arr.map((item)=>(
        <p key={item.id}>{item.name}</p>
       ))} 
        <button onClick={handleHide}>hide</button>
    </div>
    )}
    

 </div>
   </>

    )
}

export default ToggleComponent;