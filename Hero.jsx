import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='mt-28 mb-10 w-full  flex flex-col justify-center items-center gap-2'>
        <p className='text-2xl md:text-3xl font-extrabold'>Prepare With Us</p>
        <p className='text-xs md:text-xl text-gray-500 font-bold'>Be ready for the exam </p>
        <p className='text-xl md:text-5xl text-purple-600 text-justify'> Read &lt; &nbsp; 
        <ReactTyped strings={
            [
                " C Notes ",
                " Data Structure Notes ",
                " DBMS Notes ",
                " C++ Notes ",
                " Operating System Notes ",
                " Java Notes ",
                " Algorithm Notes ",
                " Microprocesspor Notes ",
                " Python Notes ",
                " HTML Notes ",
                " CSS Notes ",
                " JavaScript Notes ",
                " ReactJS Notes",
                

                
            ]
    } typeSpeed={70} backSpeed={50} loop/>
     &nbsp; &gt;    </p>
        <p className='text-center text-gray-500 text-xs md:text-sm p-2 font-semibold '>Confused on which course to take? I have got you covered.<br/> Browse courses and  find out the best course for you. Its free! <br/> <span className='font-bold bg-black text-yellow-600 px-1'>Prepare For Exam.</span> is our attempt to teach basics to advanced and those coding techniques to people in short.</p>
    </div>
  )
}

export default Hero