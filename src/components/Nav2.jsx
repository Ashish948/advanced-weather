import React from 'react'
import { Link } from 'react-router-dom'

function Nav2() {
  return (
     <>
        <div className='w-full h-10 bg-[rgb(200,204,204)] flex justify-between items-center border-b-1 text-sm md:text-base px-5 md:px-30'>
         <Link to="/home" className='font-bold hover:text-[rgb(112,110,110)]'>Home</Link> 
            <Link to="/Today" className='font-bold hover:text-[rgb(112,110,110)]'>Today</Link>
            <Link to="/Hourly" className='font-bold hover:text-[rgb(112,110,110)]'>Hourly</Link>
            <Link to="/TenDay" className='font-bold hover:text-[rgb(112,110,110)]'>Weekly</Link>
            <Link to="/MyDashboard" className='font-bold hover:text-[rgb(112,110,110)]'>My Dashboard</Link>
        </div>
     </>
  )
}

export default Nav2












