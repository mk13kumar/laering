import React, { useState } from "react";
  const Image =({imageData})=>{

    // console.log(imageData)


  // const [ age ,setAge]= useState(50)
    
  // const  handleINAge = ()=>{
  //   setAge(age+1) 
  // }
  // const  handleDecAge = ()=>{
  //   setAge(age-1) 
  // }
   

    const [showName,setShowName]= useState(null)
     const handleClick=(name)=>{
        setShowName(name) 
     }

    // console.log(imageData)
    const imageList = imageData.map((item)=>{
       const  iName = <h1>{item.name}</h1>
       

      return(
       <div key ={item.id}>
        <img onClick={()=>handleClick(iName)} src={item.src} alt=" image" />
        
      </div>
      )}) 
   return(
    <>
     <div className=" flex">
      <h1> Image Name : </h1>
      {showName}
     </div>
    <div className=" flex gap-10">{imageList}</div>
    </>
   )


  
    // return (
    
        


    //   <div className="flex justify-between mt-6">
    //     <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300" onClick={handleDecAge }>⬅</button>
    //      <h1>{age}</h1>
    //     <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300" onClick={handleINAge }>➡</button>
    //   </div>

    // );
  
  
 
  
    
  }
  export default Image
