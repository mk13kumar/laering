import React from 'react'

const ImageShow = ({image}) => {
 

  return (
   <div>
    <img src={image.urls.small_s3} alt="" />
   </div>
  )
}

export default ImageShow