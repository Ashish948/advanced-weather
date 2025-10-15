import React from 'react'
import SignIn from './SignIn'
import { Link } from 'react-router-dom'


function Navbar() {
  
  return (
    <>
        <div className='w-full h-24 z-10 flex items-center justify-between'>
          <div className= 'flex w-80 items-center ml-70 h-full'>
            <img src="weather_img-removebg-preview.png" className='h-20 ml-20'/>
          </div>
          <p className='text-black text-2xl font-bold mr-10'>Let's take a look at the weather</p>

          <div className='flex items-center h-full w-90 mr-60'>
            <img src="earth-removebg-preview.png" className='h-12'/>
            <p className='text-black font-bold'>IN &#124; &deg;C</p>
            <Link to='/SignIn' className='bg-black text-white ml-15 py-2 px-4 mr-10 rounded-xl hover:bg-[rgb(112,110,110)]'
            >Sign Up</Link>
            <Link className='hover:bg-[rgb(112,110,110)] rounded-xl'><img src="setting-removebg-preview.png" className='h-15'/></Link>
          </div>


        </div>

    </>
  )
}

export default Navbar