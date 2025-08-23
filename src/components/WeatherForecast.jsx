import React, { useState } from 'react'

function WeatherForecast({temp, des}) {
console.log(typeof(temp))

let cel = (temp - 273.15).toFixed(2);

  return (
    <div className='bg-[rgba(66,176,228,0.47)] h-50 w-180 mx-auto flex border-2 border-dashed pt-10 rounded-4xl'>

      <div className='flex-col w-60 h-30 align-center mt-3.5'>
        <p className='text-3xl font-bold text-[rgb(0,139,139)] text-center underline'>Temperature</p>
        <p className='text-3xl text-[rgb(0,139,139)] font-bold text-center mt-2'>{cel}&#176;C</p>
      </div>

      <div className='flex-col w-105 ml-15 h-30 align-center mt-3.5'>
        <p className='text-3xl font-bold text-[rgb(0,139,139)] text-center underline'>Description</p>
        <p className='text-[rgb(0,139,139)] font-bold text-xl mt-2 text-center'>{des}</p>
      </div>

    </div>
  )
}

export default WeatherForecast