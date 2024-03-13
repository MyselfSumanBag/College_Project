import React from 'react'
import Card from './Card'
import { useRef } from 'react';


function Notes() {

    const ref = useRef(null);

    const data = [
        {
            id:0,
            subject:"C Language",
            instructor:"Payel Jana",
            published_Date:"4th Mar 2024"

        },
        {
            id:1,
            subject:"Data Structure",
            instructor:"Insia Taslim",
            published_Date:"2th Feb 2024"

        },
        {
            id:2,
            subject:"DBMS Notes",
            instructor:"Arnab Kabiraj",
            published_Date:"7th Mar 2024"

        },
        {
            id:3,
            subject:"C++ Notes",
            instructor:"Payel Jana",
            published_Date:"4th Mar 2024"

        },
        {
            id:4,
            subject:"Operating System Notes",
            instructor:"Insia Taslim",
            published_Date:"7th Mar 2024"

        },
        {
            id:5,
            subject:"Java Notes",
            instructor:"Insia Taslim",
            published_Date:"24th February 2024"

        },
        {
            id:6,
            subject:"Algorithm Notes",
            instructor:"Suman Bag",
            published_Date:"4th Mar 2024"

        },
        {
            id:7,
            subject:"Microprocessor Notes",
            instructor:"Arnab Kabiraj",
            published_Date:"22nd January 2024"

        },
        {
            id:8,
            subject:"Python Notes",
            instructor:"Payel Jana",
            published_Date:"18th January 2024"

        },
        {
            id:9,
            subject:"HTML Notes",
            instructor:"Arnab Kabiraj",
            published_Date:"1st February 2024"

        },
        {
            id:10,
            subject:"CSS Notes",
            instructor:"Insia Taslim",
            published_Date:"4th March 2024"

        },
        {
            id:11,
            subject:"JavaScript Notes",
            instructor:"Suman Bag",
            published_Date:"25th January 2024"

        },
        {
            id:12,
            subject:"ReactJS Notes",
            instructor:"Suman Bag",
            published_Date:"17th February 2024"

        },
        
    ]
  return (
    <>
    
        <div className='py-4 mt-2  h-auto w-full  flex flex-wrap justify-center item-center gap-6 shadow-lg mb-6'>
        
            {
                data.map((item,index) => (
                    <Card data={item} reference={ref}/>
                
            ))}

    

        </div>


    
    </>
  )
}

export default Notes