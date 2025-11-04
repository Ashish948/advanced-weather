import React from 'react'
import SignIn from './SignIn'
import { Link } from 'react-router-dom'


function Navbar() {
  
  return (
    <>
        <div className='w-full h-24 flex items-center justify-between'>
          <div className= 'flex items-center  gap-7 h-full'>
            <img src="weather_img-removebg-preview.png" className='h-20 ml-4'/>
          <p className='text-black hidden md:block md:text-2xl font-bold md:w-90'>Let's take a look at the weather</p>
          </div>

          <div className='flex items-center h-full ml-10'>

            <img src="earth-removebg-preview.png" className='h-12'/>
            <p className='text-black font-bold w-35'>IN &#124; &deg;C</p>
            <Link to='/SignIn' className='bg-black text-white md:ml-15 py-2 px-4 mr-4 md:mr-20 rounded-xl hover:bg-[rgb(112,110,110)] text-center w-30  2xl:w-auto'
            >Sign Up</Link>
            <Link className='hover:bg-[rgb(112,110,110)] rounded-xl'><img src="setting-removebg-preview.png" className='h-15 mr-10'/></Link>
          </div>


        </div>

    </>
  )
}

export default Navbar