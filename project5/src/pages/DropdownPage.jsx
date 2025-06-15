import React, { useState } from 'react'
import Dropdown from '../component/Dropdown'
const DropdownPage = () => {

     const [selection,setSelection]= useState(null)
      
     const handleSelect =(option)=>{
      setSelection(option)
     }
    
      const options = [
        { id: 1, label:"Red", value :'red' },
        { id:1, label:"Green", value :'green' },
        {  id:1,label:"Blue", value :'blue' },
       
      ]
  return (
    <div>
        <Dropdown options ={options} onChange={handleSelect} value={selection}/>
    </div>
  )
}

export default DropdownPage