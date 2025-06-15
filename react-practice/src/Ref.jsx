import { useRef } from "react";

 function Ref(){ 
    const popupRef = useRef(null)
    
    const inputhandle = ()=>{
        popupRef.current.focus()
    }

  

    // const openPopup=()=>{
    
    //     popupRef.current.style.display='block';
    // }
    // const closePopup=()=>{
    //     popupRef.current.style.display='none';
    // }

  return(
     <div>

        <input type="text" ref={popupRef}/>
        <button onClick={inputhandle}>  click me </button>

    
      {/* <button onClick={openPopup}>Open Popup</button>
      <div
        ref={popupRef}
      >
        <h3>Popup Content</h3>
        <p>This popup is controlled with useRef.</p>
        <button onClick={closePopup}>Close</button>
      </div> */}
    </div>
  )
 }
 export default Ref;