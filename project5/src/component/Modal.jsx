import React, { useEffect } from "react";
import ReactDOM from "react-dom";
const Modal = ({ children, actionBar }) => {
  useEffect(()=>{
    document.body.classList.add('overflow-hidden')
   
    return()=>{
      document.body.classList.remove('overflow-hidden')
    }
   
  },[])
  

  return ReactDOM.createPortal(
    <div>
      <div o className="fixed absolute inset-0 bg-gray-300 opacity-70"></div>
      <div className="fixed absolute inset-40 p-10 bg-white">
        <div className=" flex flex-col justify-between h-full">
          {children}
          <div className=" flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
