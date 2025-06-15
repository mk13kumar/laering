import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
const Dropdown = ({ options,value,onChange }) => {
  
  const [isOpen, setIsOpen] = useState(false);
   const divEl = useRef();
  
  useEffect(()=>{
     const handler =(event)=>{
       if(!divEl.current){
        return;
       }

      if(!divEl.current.contains(event.target))
       setIsOpen(false)
     }
     document.addEventListener('click',handler,true);
  },[])

  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
   const handleOptionClick=(option)=>{
    // setIsOpen(!isOpen)
    setIsOpen(false);
    onChange(option)
   }
  const rendereedOption = options.map((option) => {
    return (
      
        <div className="haver: bg-sky-200 rounded cursor-pointer mt-2 p-1" onClick={()=>handleOptionClick(option)} key={option.value}>{option.label}</div>
      
    );
  });

  // let content = "Select...";
  // if(selection){
  //   content = selection.label
  // }
  return (
    <div  ref={divEl}  className="w-48 relative">
      <div className="flex justify-between item-center cursor-pointer border rounded p-3 shadow   bg-white-300 w-full" onClick=
      {handleClick}>{value?.label || "Select..."}
      <FaCaretDown/>
      </div>
      { isOpen &&<div className=" absolute top-full border rounded p-3 shadow  bg -white w-full">{rendereedOption}</div>}
    </div>
  );
};

export default Dropdown;
