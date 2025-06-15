import React, { useState } from 'react'
import Modal from '../component/Modal'
const ModalPage = () => {
     const [ showModal,setShowModal]= useState(false)
     const handdleClick=()=>{
        setShowModal( true )
     }
     const handleCloseModal =()=>{
        setShowModal(false)
     }

     const actionBar=(
        <button onClick={handleCloseModal} className='bg-blue-500 text-white px-2 py-1 hover:bg-green-400' >I Accepted</button>
     );

    const modal= <Modal onClose={handleCloseModal} actionBar={actionBar}>
      <p> Here is an impotant agreement for you  to accept</p>   
    </Modal>
     

  return (
    <div>

          <button onClick={handdleClick} className='bg-blue-400 text-white px-2 py-1 hover:bg-blue-500' > Modal Button</button>
          {showModal && modal }
        
         <p>
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p> 
         <p>
         dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p> 
       
        
    </div>
  )
}

export default ModalPage