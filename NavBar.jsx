import React, { useState  } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import { MdDarkMode } from "react-icons/md";





function NavBar() {

    const [toggle,setToggle] = useState(true);
    // const [theme,setTheme] = useState('light');

    // useEffect(()=>{
    //     if(theme ==='dark'){
    //         document.documentElement.classList.add('dark')
    //     } else{
    //         document.documentElement.classList.remove('dark')

    //     }
    // },[theme])

    // const handleTheme = () => {
    //     setTheme(theme ==='dark' ? 'light' : 'dark')
    // }




  return (
    
    <div className='py-4 md:py-8 px-4   flex justify-between items-center shadow-2xl relative '>
        
        <h1 className='md:text-2xl'>Prepare For Exam.</h1>
        {
            toggle ?<p className='md:hidden w-10 h-10 rounded-full bg-black flex justify-center items-center text-white' onClick={()=> setToggle(!toggle)}><RiMenu3Fill/></p>
             :
            <p className=' md:hidden w-10 h-10 rounded-full bg-black flex justify-center items-center text-white' onClick={() => setToggle(!toggle)}><AiOutlineClose/></p>
        }
        <ul className='hidden md:flex justify-center items-center gap-10 cursor-pointer'>
            <Link className='hover:text-purple-600' to="/">Home</Link>
            <Link className='hover:text-purple-600' to="/notes">Notes</Link>
            <Link className='hover:text-purple-600' to="/aboutus">About us</Link>
            <Link className='hover:text-purple-600' to="/contactus">Contact us</Link>
            <Link className='px-6 py-2 text-center text-white bg-purple-600'>Log In</Link>
            {/* <p className={`w-10 h-10 bg-black rounded-full flex justify-center items-center text-white`} onClick={handleTheme}><MdDarkMode/></p> */}

        </ul>

        {/* responsive menu */}
        <ul className={`md:hidden fixed top-16  p-4 flex flex-col gap-6 w-full h-full bg-white duration-500 ${!toggle ? 'left-0' : 'left-[-100%]'}`}>
            <Link className='hover:text-purple-600' to="/">Home</Link>
            <Link className='hover:text-purple-600' to="/notes">Notes</Link>
            <Link className='hover:text-purple-600' to="/aboutus">About us</Link>
            <Link className='hover:text-purple-600' to="/contactus">Contact us</Link>
            <Link className='w-[5rem] py-1 bg-purple-600 text-white text-center'>Log In</Link>
        </ul>

    </div>

    
  )
}

export default NavBar