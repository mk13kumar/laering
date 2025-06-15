import './imageList.css'
import React from 'react'
import ImageShow from './ImageShow'
const ImageList = ({images}) => {
  const renderedImage = images.map((image)=>{
   return <ImageShow  image ={image}  key={image.id}/>
  })
 
  return (
    <div className='image-list'>{renderedImage}</div>
  )
}

export default ImageList