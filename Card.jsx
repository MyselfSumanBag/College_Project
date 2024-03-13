import React from 'react'
import { Link } from 'react-router-dom'

function Card({data,reference}) {
  return (
    <div className='md:py-3  w-64 h-96 flex flex-col justify-center items-center gap-2 border-2 border-purple-600 rounded-md shadow-2xl text-center overflow-hidden hover:scale-105 duration-300' >
        <h1 className='text-xl md:text-xl'>Prepare For Exam.</h1>
        <img src={data.image} alt="" className='w-20 h-20 rounded-full object-cover object-center' />
        <p className='text-3xl'>{data.subject}</p>
        <p className='text-sm text-gray-500'>From scratch to advanced</p>
        <p className='text-gray-600'>Instruceted By</p>    
        <p className='text-justify text-xl md:text-2xl font-semibold tracking-widest'>{data.instructor}</p>
        <p className='text-justify text-sm font-semibold'>{data.published_Date}</p>
        <Link className='px-6 py-1 bg-purple-600 text-white' to={data.subject}> Get Notes</Link>
    </div>
  )
}

export default Card