import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 items-center px-32 flex gap-5'>

        <div className='card-container h-[50vh] w-1/2'>
         <div className='card relative w-full h-full flex items-center justify-center rounded-xl bg-[#004D43]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy; 2024-2025</button>
         </div>
        </div>
        <div className='card-container flex gap-5 w-1/2 h-[50vh]'>
            
        <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
        <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy; RATING 5.0 ON CLUTCH</button>
        </div>

        <div className='card w-1/2 relative flex items-center justify-center h-full rounded-xl bg-[#192826]'>
        <img className='w-32' src="	https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-4 bottom-10 px-5 py-1 border-2 rounded-full'>BUSINESS BOOTCAMP ALLUMNI</button>
        </div>

        </div>
      
    </div>
  )
}

export default Cards
