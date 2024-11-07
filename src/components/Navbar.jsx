import React from 'react'

function Navbar() {
  return (
    <div className='w-full fixed z-[999] px-20 py-8 font-["Neue Montreal"] flex justify-between items-center'>
    <div className='logo text-4xl font-bold'>Ochi</div>
    
    <div className='links flex gap-10'>
        {["services","our work","about us","insights","contact"].map((item,index)=><a 
        key={index} className={`text-lg capitalize font-light ${index===4 && "ml-32"}`}>
         {item}
        </a>)}
    </div>

    </div>
  )
}

export default Navbar
