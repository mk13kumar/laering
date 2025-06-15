import './SearchForm.css';
import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {
  const [term,setTerm] =useState('')

  const handleFormSubmit=(event)=>{
    event.preventDefault();
onSubmit(term);            
    
  }
 
  const handleChange =(event)=>{
  setTerm(event.target.value)

  }

  return (
    <>
   <div className='saerch-bar'>
     <form className='form' onSubmit={handleFormSubmit}>
       <label htmlFor=""> Enter Search Term</label> 
      <input value={term} onChange={handleChange}  />
     </form>
   </div>
    
    </>

  )
}

export default SearchBar