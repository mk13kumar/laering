import { useState } from 'react'
import SearchBar from './components/SearchBar'
// import './App.css'
import searchImage from './Api'
import ImageList from './components/ImageList'
function App() {
  const [images,setImages]=useState([])
  const handleSubmit = async(term)=>{
   const result = await searchImage(term)
   setImages(result);
  }

  return (
    <>
     <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
     </div>
    </>
  )
}

export default App
