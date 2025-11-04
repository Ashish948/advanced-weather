import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <>
        <div className='bg-[rgb(225,183,197)] h-screen w-screen flex justify-center md:pt-27 md:px-20'>
            <div className='h-160 w-245 bg-[rgb(255,255,255)] flex rounded-2xl'>

                <div className='h-full w-90 lg:w-100'>
                    <img src="ver_img.jpg" className='object-cover w-full h-full rounded-l-2xl'/>
                </div>

                <div className='lg:w-145 h-full pl-5'>
                    <p className='text-2xl md:text-4xl font-bold pt-10 text-[rgb(88,86,86)]'>Hello Dear 😊</p>
                    <p className='font-bold pt-8 text-[rgb(88,86,86)] text-[15px] md:text-base hidden md:block'>To get weather updates please Log in to get started.</p>

                    
                    <div className='flex md:pl-10 lg:pl-26 pt-15 lg:pt-30 items-center'>
                        <img src="email-removebg-preview.png" className='h-8 md:h-12 pt-1'/>
                        <input type="Email" placeholder='Email' className='border-b-2 border-[rgb(136,133,133)] h-12 w-35 md:w-45 lg:w-75 pl-2 font-bold text-xl outline-none'/>
                    </div>

                    <div className='flex md:pl-14 lg:pl-30 py-8 items-center'>
                        <img src="pasword.png" className='h-8 md:h-9 pt-1'/>
                        <input type="password" placeholder='Password' className='border-b-2 border-[rgb(136,133,133)] h-12 w-35 md:w-45 lg:w-75 pl-2 font-bold text-xl outline-none'/>
                    </div>

                    <div className='pt-10 ml-12 lg:ml-50 w-80 lg:w-95'>
                        <Link to='/home' className='px-6 lg:px-15 py-2 lg:py-4 md:ml-20 bg-[rgb(156,111,192)] rounded-4xl hover:bg-[rgb(156,131,192)]'>Log in</Link>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default SignIn

