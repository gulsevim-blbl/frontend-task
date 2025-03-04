import React from 'react'

const Button = ({text, children}) => {
  return (
    <button className="fixed bottom-6 left-4 right-4 bg-[#a099ff] text-black cursor-pointer py-3 rounded-lg text-lg font-sans shadow-md  max-w-md mx-auto">
     <span className="relative top-[-1px] mr-1">{children}</span>
     <span>{text}</span>
  </button>
  )
}

export default Button


