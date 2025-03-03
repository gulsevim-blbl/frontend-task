import React from 'react'

const Button = ({text, children}) => {
  return (
    <button className="fixed bottom-6  bg-[#a099ff] text-black w-full max-w-md py-3 rounded-lg text-lg font-semibold shadow-md">
     <span className="relative top-[-1px] mr-1">{children}</span>
     <span>{text}</span>
  </button>
  )
}

export default Button



