import React from 'react'
import CreateAcount from './CreateAcount'
import { Link } from 'react-router-dom'

function MyDashboard() {
  return (
    <>
      <div className='md:bg-[rgb(221,226,226)] md:px-25' >

        <div className='md:text-3xl md:pt-15'>My Dashboard</div>

        <p>Create a free account, then set up your dashboard with the weather details that matter most to you.</p>

        <div className='md:pl-8'>
          <ul style={{ listStyleType: 'square' }} className='md:pt-4'>
            <li>Select up to 2 locations and customise the data you want to see</li>
            <li>Compare key conditions for 2 locations over 12 hours or 5 days</li>
            <li>See radar for your location at a glance</li>
          </ul>
        </div>

        <div className='md:flex md:mt-10 md:items-center'>
          <Link to='/CreateAccount' className='md:bg-black md:text-white md:px-6 md:py-2 md:rounded-xl md:hover:bg-[rgb(112,110,110)]'>Create account</Link>
          <p className='md:pl-10'>Already have an account&#63;</p>
          <Link to='/CreateAccount' className='md:text-blue-800 md:underline md:pl-2 md:hover md:font-bold'>Log in</Link>
        </div>

      </div>

      <div className='md:bg-[rgb(221,226,226)] md:pt-10 md:border-b-1 md:flex md:justify-end md:pr-10'>
        <img src="Dashboard_US.png" className='md:h-90 md:pb-20 float-right' />
      </div>

      <div className='md:bg-[rgb(221,226,226)] md:w-screen md:h-full'>

        <div className='md:flex md:pt-8 md:justify-between md:px-32'>

          <div className='md:flex md:items-center'>
            <p className='md:text-xl md:font-bold'>Connect with us</p>
            <img src="com-removebg-preview.png" className='md:h-15 md:ml-3' />
          </div>

          <div className='md:flex md:h-15'>
            <img src="weather_img-removebg-preview.png" className='md:pr-4' />
            <img src="Weath_undergr.png" className='md:pr-4' />
            <img src="storm.jpg" className='md:pr-4' />
            <img src="we_company.png" className='md:pr-4' />
          </div>

        </div>

        <div className='md:flex md:flex-col md:w-screen md:items-center md:mt-5'>
          <p className='md:w-175 md:text-center md:mt-5'>We recognise our responsibility to use data and technology for good.
            We may use or share your data with our data vendors. Take control of your data.</p>

          <p className='md:text-center md:w-250 md:mt-12'>The Weather Channel is the world's most accurate forecaster according to ForecastWatch,
            Global and Regional Weather Forecast Accuracy Overview, 2021-2024, commissioned by The Weather Company.</p>

          <p className='md:mt-5'>Weather Channel</p>
          <p className='md:mt-5'>© The Weather Company, LLC 2025</p>
        </div>

      </div>

    </>



  )
}

export default MyDashboard
