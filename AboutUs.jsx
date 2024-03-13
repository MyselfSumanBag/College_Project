import React from 'react'
import { ImLeaf } from "react-icons/im";
import { FaQuoteLeft,FaQuoteRight} from "react-icons/fa";
import { GoGoal } from "react-icons/go";

function AboutUs() {
  return (
    <div className='w-full h-auto mt-10  p-4'>
        <h1 className='text-center text-3xl md:text-5xl font-bold mb-4'>About Us</h1>
        <p className='text-justify text-sm text-gray-600 font-sans mb-4'>Prepare For Exams. ' mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course I Can Do It". We aim to do this by providing exceptional up skilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.</p>
        <div className='w-full flex flex-col md:flex-row' >
            <div className='flex flex-col gap-2 mt-10 w-full  md:w-1/2 '>
                <p className='text-3xl'>
                    <ImLeaf/>
                </p>
                <h1 className='text-xl'>Start your journey now level ups your skills.</h1>
                <p>
                    "Your journey in education is not defined by innate talent, but by the tenacity to persist, the courage to learn from failures, and the dedication to improve every day. Remember, success is often crafted through hard work and resilience, not just inherent gifts. Embrace the challenge, for your effort is the true measure of your potential."   
                </p>
            </div>
            <div className='mt-10 w-full md:w-1/2'>
                <p className='text-justify text-3xl text-gray-600 font-semibold md:text-5xl tracking-wide'>
                    <FaQuoteLeft/>
                           Talent is cheaper than salt, what separates a talented individual from the successfull one is lots of hardwork.
                <FaQuoteRight/>
                </p>
            </div>
        </div>
        <div className='mt-20'>
            <p className='text-center text-3xl font-semibold mb-8 tracking-widest'>OUR MISSION</p>
            <div className='flex flex-col md:flex-row justify-between'>
                <p className='md:pt-[9rem] text-sm md:text-xl'><GoGoal className='w-8 h-8 rounded-full'/>Prepare For Exams. is the result of a continual effort to exponentially increase the employability of every Indian, irrespective of their socioeconomic status. With accessibility and affordability being the support structure of high-quality, industry-relevant courses, Prepare For Exams. aims to empower professionals and students alike to either jumpstart their careers or leverage existing skills with new, future-driven upgrades that will help them realise their full potential.</p>
                <img src="https://pwskills.com/images/aboutUs/complete-the-mission.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs