import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

function ContactUs() {
  return (
    <div className='mt-8 mb-10 w-full h-auto px-2 md:px-10 flex flex-col md:flex-row'>
      <div className=' w-full h-full md:w-1/2 p-2 md:p-6 leading-10 flex flex-col gap-4'>
        <h1 className='text-2xl md:text-5xl font-semibold tracking-wide'>Contact Us</h1>
        <div>
          <p className='text-xs md:text-xl text-justify text-gray-700'>For any queries, Please reach out to us. Our Support team <br/> will get back to you within 24 hours.</p>

        </div>
       <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <MdEmail className='text-sm md:text-xl'/>
              <span className='text-xs md:text-sm'>Support@prepareforexams.com</span>
            </div>
            <div  className='flex items-center gap-2'>
            <FaPhoneAlt className='text-sm md:text-xl'/>+91 <span className='text-xs md:text-sm'>9999999999</span>
            </div>
        </div>
        <div>
          <img src="https://pwskills.com/images/contactUs/employeesHelpingCustomers.svg" alt="students discussion photo" />
        </div>

      </div>
      <div className=' w-full md:w-1/2 h-full'>
        <form className='w-full h-full shadow-2xl p-4 flex flex-col gap-4'>
          <div>
            <p className='text-xl md:text-2xl font-bold'>Enquiry</p>
            <p className='h-[1px] w-full bg-gray-400'></p>
          </div>
          <div>
            <input type="text" className='w-full border-none outline-none ' placeholder='Full Name *' required />
            <p className='h-[1px] w-full bg-gray-400'></p>
          </div>
          <div>
            <input type="text" className='w-full border-none outline-none ' placeholder='Email Address *' required />
            <p className='h-[1px] w-full bg-gray-400'></p>

          </div>
          <div>
            <input type="text" className='w-full border-none outline-none ' placeholder='Enter your phone number *' required />
            <p className='h-[1px] w-full bg-gray-400'></p>
          </div>
          <textarea  cols="10" rows="5" className='outline-none border-[1px] p-2 border-gray-500 rounded-md'>Enter your message</textarea>
          <button className='w-16 rounded-md py-2 text-white bg-purple-600'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default ContactUs