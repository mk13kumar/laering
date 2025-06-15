import React from 'react'

const Button = ({children}) => {
    console.log(children)
  return (
    <button className='px-3 py-1.5  border border-blue-600 bg-blue-500 text-white'>{children}</button>
  )
}

export default Button