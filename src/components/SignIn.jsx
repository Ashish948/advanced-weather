import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
        <div className='bg-[rgb(225,183,197)] h-screen w-screen flex justify-center pt-27'>
            <div className='h-160 w-245 bg-[rgb(255,255,255)] flex rounded-2xl'>

                <div className='h-full w-100'>
                    <img src="ver_img.jpg" className='object-cover w-full h-full rounded-l-2xl'/>
                </div>

                <div className='w-145 h-full pl-5'>
                    <p className='text-4xl font-bold pt-10 text-[rgb(88,86,86)]'>Hello Dear 😊</p>
                    <p className='font-bold pt-8 text-[rgb(88,86,86)]'>To get weather updates please Log in to get started.</p>

                    
                    <div className='flex pl-26 pt-30'>
                        <img src="email-removebg-preview.png" className='h-12 pt-1'/>
                        <input type="Email" placeholder='Email' className='border-b-2 border-[rgb(136,133,133)] h-12 w-75 pl-2 font-bold text-xl outline-none'/>
                    </div>

                    <div className='flex pl-28 py-8'>
                        <img src="pasword.png" className='h-9 pt-1'/>
                        <input type="password" placeholder='Password' className='border-b-2 border-[rgb(136,133,133)] h-12 w-75 pl-2 font-bold text-xl outline-none'/>
                    </div>

                    <div className='pt-10'>
                        <Link to='/home' className='px-15 py-4 bg-[rgb(156,111,192)] ml-65 rounded-4xl hover:bg-[rgb(156,131,192)]'>Log in</Link>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default SignIn

