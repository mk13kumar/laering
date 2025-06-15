import React from 'react'
import Image from '../component/Image'
import vally from '../images/kashmir1.jpeg';
import grash from '../images/kashmir2.jpeg';
import river from '../images/kashmir3.jpeg';
  

const ImagePage = () => {

     const imageData = [
  {
    id: 0,
    src:   vally,
    name: "Kashmir Valley ",
  },
  {
    id: 1,
    src: grash,
    name: "Beautiful ",
  },
  {
    id: 2,
    src: river,
    name: "Pehlgao ",
  },


 ]

  return (
    <div>
      <Image imageData={imageData}/> 
    </div>
  )
}

export default ImagePage