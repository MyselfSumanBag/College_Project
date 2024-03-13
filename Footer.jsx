import React from 'react'
import {FaYoutube, FaLinkedin,FaTelegram,FaTwitter,FaPhoneAlt, FaInstagram} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";


function Footer() {
  return (
    
    <div className=' mt-6 h-auto p-2 md:p-8 w-full grid md:grid-cols-3'>
    
      <div className='  py-4 px-2 flex flex-col gap-2'>
        <p className='font-bold text-xl md:text-3xl '>Prepare For Exams.</p>
        <div className='flex  items-center gap-2'>
          <MdEmail className='text-sm md:text-xl'/>Support@prepareforexams@gmail.com</div>
        <div className='flex  items-center gap-2'>
          <FaPhoneAlt className='text-sm md:text-xl'/>+91 <span>7602579339</span>
        </div>
        {/* icons */}
        <div className='flex gap-2 mt-2'>
            <p className='w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-red-900'>
                <FaYoutube className='text-sm md:text-xl '/>
            </p>
            <p className='w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-blue-800'>
                <FaLinkedin className='text-sm md:text-xl'/>    

            </p>
            <p className='w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-blue-900'>
                <FaTelegram className='text-sm md:text-xl'/>
                
            </p>
            <p className='w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-indigo-900'>
                <FaTwitter  className='text-sm md:text-xl'/>
            </p>
            <p className='w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-red-400'>
                <FaInstagram  className='text-sm md:text-xl'/>
            </p>

        </div>
      </div>
      {/* company */}
      <div className='py-4 px-2 flex flex-col gap-2'>
        <h1 className=' text-xl md:text-3xl md:mb-2 '>Company</h1>
        <div className='flex gap-4 border-t-4 border-orange-700 py-4'>
          <ul className='text-xs md:text-sm flex flex-col gap-2'>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className='text-xs md:text-sm flex flex-col gap-2'>
            <li>Contact us</li>
            <li>Job assistance</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      </div>
      {/* Products */}
      <div className='py-4 px-2 flex flex-col gap-2'>
        <h1 className=' text-xl md:text-3xl md:mb-2 '>Products</h1>
        <div className='flex gap-4 border-t-4 border-orange-700 py-4'>
          <ul className='text-xs md:text-sm flex flex-col gap-2'>
            <li>Coursera Lab</li>
            <li>Experience Portal</li>
            <li>Hall of fame</li>
          </ul>
          <ul className='text-xs md:text-sm flex flex-col gap-2'>
            <li>Job Portal</li>
            <li>Become an affiliate</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer