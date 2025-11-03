import React from 'react'
import { Link } from 'react-router-dom'

function CreateAcount() {
  return (
    <>
        <div className='md:h-screen md:w-screen md:flex md:justify-center md:pt-20 md:relative bg-[url(public/bg.jpg)]'>

            <div className='md:h-150 md:w-160 md:bg-white md:rounded-3xl'>

                <p className='md:pt-15 md:pl-46 md:text-5xl md:font-bold md:text-[rgb(88,86,86)]'>Create Account</p>

                <div className='md:flex md:justify-center'>
                  <p className='md:pt-4 md:font-bold md:text-xl'>Already have an account?</p>
                  <Link to="/SignIn" className='md:pl-2 md:pt-4 md:font-bold md:text-blue-800 md:text-xl'> Sign In</Link>
                </div>

                <div className='md:flex md:pl-30 md:pt-20'>
                    <input type="text" placeholder='Username' className='md:border-2 md:border-[rgb(136,133,133)] md:h-12 md:w-100 md:ml-13 md:font-bold 
                    md:text-xl md:outline-none md:rounded-3xl md:pl-3 md:bg-[rgb(231,227,227)]'/>
                </div>


                <div className='md:flex md:pl-30 md:pt-10 md:w-50'>
                    <input type="text" placeholder='First Name' className='md:border-2 md:border-[rgb(136,133,133)] md:bg-[rgb(231,227,227)] md:h-12 md:w-50
                     md:ml-13 md:font-bold md:text-xl md:outline-none md:rounded-tl-3xl md:rounded-bl-3xl pl-3'/>

                    <input type="text" placeholder='Last Name' className='md:border-2 md:border-[rgb(136,133,133)] md:bg-[rgb(231,227,227)] md:h-12
                     md:w-50 md:ml-1 md:font-bold md:text-xl md:outline-none md:rounded-tr-3xl md:rounded-br-3xl md:pl-3'/>
                </div>

                <div className='md:flex md:pl-30 md:pt-10 md:w-50'>
                    <input type="password" placeholder='password' className='md:border-2 md:outline-none md:rounded-3xl md:h-12 md:pl-3 md:ml-29
                     md:border-[rgb(136,133,133)] md:bg-[rgb(231,227,227)] md:text-xl md:font-bold'/>
                </div>

                <div className='md:flex md:pl-30 md:pt-15 md:w-180 md:rounded-3xl'>
                    <Link to='/home' className='md:w-30 md:h-10 md:ml-49 md:pl-8 md:py-2 md:rounded-3xl md:bg-[rgb(79,162,187)]
                     md:hover:bg-[rgb(21,118,148)]'>Submit</Link>
                </div>

            </div>


        </div>
    </>
  )
}

export default CreateAcount


