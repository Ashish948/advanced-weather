import React from 'react'
import CreateAcount from './CreateAcount'
import { Link } from 'react-router-dom'

function MyDashboard() {
  return (
    <>
      <div className='bg-[rgb(221,226,226)] px-5 md:px-25' >

        <div className='text-3xl pt-15'>My Dashboard</div>

        <p>Create a free account, then set up your dashboard with the weather details that matter most to you.</p>

        <div className='pl-8'>
          <ul style={{ listStyleType: 'square' }} className='pt-4'>
            <li>Select up to 2 locations and customise the data you want to see</li>
            <li>Compare key conditions for 2 locations over 12 hours or 5 days</li>
            <li>See radar for your location at a glance</li>
          </ul>
        </div>

        <div className='flex mt-10 items-center'>
          <Link to='/CreateAccount' className='bg-black text-white md:px-6 py-2 w-65 text-center md:w-auto rounded-xl hover:bg-[rgb(112,110,110)]'>Create account</Link>
          <p className='pl-10'>Already have an account&#63;</p>
          <Link to='/CreateAccount' className='text-blue-800 underline pl-2 hover font-bold'>Log in</Link>
        </div>

      </div>

      <div className='bg-[rgb(221,226,226)] pt-10 border-b-1 flex justify-end pr-10'>
        <img src="Dashboard_US.png" className='h-90 pb-20 float-right' />
      </div>

      <div className='bg-[rgb(221,226,226)] w-screen h-full'>

        <div className='flex flex-col md:flex-row pt-8 justify-between md:px-10'>

          <div className='flex items-center'>
            <p className=' text-[14px] md:text-xl font-bold'>Connect with us</p>
            <img src="com-removebg-preview.png" className='h-11 md:h-15 md:ml-3 hidden md:block' />
          </div>

          <div className='flex h-15 mt-5 gap-2'>
            <img src="com-removebg-preview.png" className='h-11 md:h-15 md:ml-3 md:hidden' />
            <img src="weather_img-removebg-preview.png" className='h-9 md:pr-4' />
            <img src="Weath_undergr.png" className='h-9 md:pr-4' />
            <img src="storm.jpg" className='h-9 md:pr-4' />
            <img src="we_company.png" className='h-9 md:pr-4' />
          </div>

        </div>

        <div className='flex flex-col w-screen items-center mt-5'>
          <p className='w-175 text-center mt-5'>We recognise our responsibility to use data and technology for good.
            We may use or share your data with our data vendors. Take control of your data.</p>

          <p className='text-center w-250 mt-12'>The Weather Channel is the world's most accurate forecaster according to ForecastWatch,
            Global and Regional Weather Forecast Accuracy Overview, 2021-2024, commissioned by The Weather Company.</p>

          <p className='mt-5'>Weather Channel</p>
          <p className='mt-5'>© The Weather Company, LLC 2025</p>
        </div>

      </div>

    </>



  )
}

export default MyDashboard
