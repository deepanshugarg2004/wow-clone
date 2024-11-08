import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate,setRotate] = useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mousex = e.clientX;
      let mousey = e.clientY;
      let deltax = mousex-window.innerWidth/2;
      let deltay = mousey-window.innerHeight/2;
      var angle = Math.atan2(deltay,deltax)*(180/Math.PI);
      setRotate(angle-180);
    })
  })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      
      <div data-scroll data-scroll-speed="-.7" className='w-full relative bg-cover bg-center h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
      <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'>
      

      <div className='w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full'>
        <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>

         <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
        </div>
        
        </div>
      </div>




      <div className='w-[15vw] h-[15vw]  flex items-center justify-center bg-zinc-100 rounded-full'>
      <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full'>
      <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
      <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
      </div>
      </div>
      </div>
      
      </div></div>

    </div>
  )
}

export default Eyes
