import React from 'react'

function Featured() {
  
  return (
    <div className='w-full py-10'>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
        <h1 className='text-8xl tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-20'>
       
       <div className='w-full cards flex gap-10 mt-10'>

        <div className='cardcontainer relative w-1/2 h-[75vh]'>
        <h1 className='absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-9 text-8xl tracking-tighter'>FYDE</h1>
        <div className='w-full h-full rounded-xl overflow-hidden'>
            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="img" />
        </div>
        </div>


        <div className='cardcontainer w-1/2 h-[75vh] rounded-xl bg-red-500'>
        
        
        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="img" />
        
        </div>
       </div>
      

      </div>
    </div>
  )
}

export default Featured
