import React from 'react'
import { Link } from 'react-router-dom'

function CreateAcount() {
  return (
    <>
        <div className='h-screen w-screen flex justify-center pt-20 relative bg-[url(/bg.jpg)]'>

            <div className=' h-135 md:h-150 w-90 md:w-160 bg-white rounded-3xl'>

                <p className='pt-15 text-center text-2xl md:text-5xl font-bold text-[rgb(88,86,86)]'>Create Account</p>

                <div className='flex justify-center'>
                  <p className='pt-4 font-bold text-center text-lg md:text-xl'>Already have an account?</p>
                  <Link to="/SignIn" className='pl-2 pt-4 font-bold text-blue-800 text-lg md:text-xl'> Sign In</Link>
                </div>

                <div className='flex justify-center pt-20'>
                    <input type="text" placeholder='Username' className='border-2 border-[rgb(136,133,133)] h-12 w-70 md:w-100 font-bold 
                    text-xl outline-none rounded-3xl pl-3 bg-[rgb(231,227,227)]'/>
                </div>


                <div className='flex justify-center pt-10'>
                    <input type="text" placeholder='First Name' className='border-2 border-[rgb(136,133,133)] bg-[rgb(231,227,227)] h-12 md:w-50
                     font-bold w-35 text-xl outline-none rounded-tl-3xl rounded-bl-3xl'/>

                    <input type="text" placeholder='Last Name' className='border-2 border-[rgb(136,133,133)] bg-[rgb(231,227,227)] h-12
                     md:w-50 ml-1 w-35 font-bold text-xl outline-none rounded-tr-3xl rounded-br-3xl pl-3'/>
                </div>

                <div className='flex justify-center pt-10'>
                    <input type="password" placeholder='password' className='border-2 outline-none rounded-3xl h-12
                     border-[rgb(136,133,133)] bg-[rgb(231,227,227)] text-xl font-bold'/>
                </div>

                <div className='flex pt-11 justify-center rounded-3xl'>
                    <Link to='/home' className='w-30 h-10 text-center py-2 rounded-3xl bg-[rgb(79,162,187)]
                     hover:bg-[rgb(21,118,148)]'>Submit</Link>
                </div>

            </div>


        </div>
    </>
  )
}

export default CreateAcount


