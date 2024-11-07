import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      
    <div className='textstructure mt-52 px-20'>

    <div className='masker'>
     <div className='w-fit flex items-center'>
     <h1 className='uppercase text-[9vw] leading-[7vw] font-bold font-["Founders_Grotesk_X-Condensed"] '>We Create</h1>
     </div>
    </div>

    <div className='masker'>
    <div className='w-fit flex'>
        <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='w-[9vw] mr-[1vw] rounded-lg h-[5.7vw] relative -top-[0.9vw]'>
          <img src="https://www.shutterstock.com/image-illustration/this-abstract-illustration-featuring-fluid-260nw-2503287839.jpg" alt="" />
        </motion.div>
     <h1 className='uppercase text-[9vw] leading-[7.5vw] font-bold font-["Founders_Grotesk_X-Condensed"] '>Eye Opening</h1>
     </div>
    </div>

    <div className='masker'>
    <div className='w-fit flex items-center'>
     <h1 className='uppercase text-[9vw] leading-[7vw] font-bold font-["Founders_Grotesk_X-Condensed"] '>Presentations</h1>
     </div>
    </div>

    <div className='border-t-[1px] mt-20 flex justify-between items-center py-5 px-7 border-zinc-800'>
        {["For public and private comapnies","From the first pitch to IPO"].map((item,index)=><p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
        )}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] font-light text-md uppercase border-zinc-400 rounded-full'>start the project</div>
            <div className=' border-[2px] w-10 h-10 flex justify-center items-center border-zinc-500 rounded-full'>
               <span className='rotate-[45deg]'> <FaArrowUpLong /></span>
                </div>
        </div>
    </div>

    </div>

    </div>
  )
}

export default LandingPage
