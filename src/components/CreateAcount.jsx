import React from 'react'
import { Link } from 'react-router-dom'

function CreateAcount() {
  return (
    <>
        <div className='h-screen w-screen flex justify-center pt-20 relative bg-[url(public/bg.jpg)]'>

            <div className='h-160 w-180 bg-white rounded-3xl'>

                <p className='pt-15 pl-46 text-5xl font-bold text-[rgb(88,86,86)]'>Create Account</p>

                <div className='flex justify-center'>
                  <p className='pt-4 font-bold text-xl'>Already have an account?</p>
                  <Link to="/SignIn" className='pl-2 pt-4 font-bold text-blue-800 text-xl'> Sign In</Link>
                </div>

                <div className='flex pl-30 pt-20'>
                    <input type="text" placeholder='Username' className=' border-2 border-[rgb(136,133,133)] h-12 w-100 ml-13 font-bold 
                    text-xl outline-none rounded-3xl pl-3 bg-[rgb(231,227,227)]'/>
                </div>


                <div className='flex pl-30 pt-10 w-50'>
                    <input type="text" placeholder='First Name' className='border-2 border-[rgb(136,133,133)] bg-[rgb(231,227,227)] h-12 w-50 ml-13 
                    font-bold text-xl outline-none rounded-tl-3xl rounded-bl-3xl pl-3'/>

                    <input type="text" placeholder='Last Name' className='border-2 border-[rgb(136,133,133)] bg-[rgb(231,227,227)] h-12 w-50 ml-1
                     font-bold text-xl outline-none rounded-tr-3xl rounded-br-3xl pl-3'/>
                </div>

                <div className='flex pl-30 pt-10 w-50'>
                    <input type="password" placeholder='password' className='border-2 outline-none rounded-3xl h-12 pl-3 ml-29 border-[rgb(136,133,133)]
                    bg-[rgb(231,227,227)] text-xl font-bold'/>
                </div>

                <div className='flex pl-30 pt-15 w-180 rounded-3xl'>
                    <Link to='/home' className='w-30 h-10 ml-49 pl-8 py-2 rounded-3xl bg-[rgb(79,162,187)] hover:bg-[rgb(21,118,148)]'>Submit</Link>
                </div>

            </div>


        </div>
    </>
  )
}

export default CreateAcount


