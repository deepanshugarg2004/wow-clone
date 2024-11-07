import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-t-3xl bg-[#004d43]'>
      
    <div className='text border-y-2 overflow-hidden border-zinc-300 flex whitespace-nowrap'>
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='pr-20 text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-12 -mb-[6vw] font-semibold'>We are Wow</motion.h1>
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='pr-20 text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-12 -mb-[6vw] font-semibold'>We are Wow</motion.h1>
    </div>
     

    </div>
  )
}

export default Marquee
