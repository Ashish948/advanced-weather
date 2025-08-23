import React, { useState } from 'react'
import WeatherForecast from './WeatherForecast'
import useLocationInfo from '../costume_hook/useLocationInfo'
import useWeatherInfo from '../costume_hook/useWeatherInfo'



function Bodies() {
  const [loc, setLoc] = useState()
  const [wheather, setWheather] = useState(false)

   let data = useLocationInfo(loc)

   let temp = useWeatherInfo(loc)
   
   

  return (
    <>
     <div className='relative h-screen w-screen'>
      <img src="public/weth.jpg" className='h-screen w-screen' />

        <div className='absolute inset-y-50 inset-x-160 w-150 h-80 '>

          <div className='flex justify-center font-bold mb-15'>
            <h2 className='text-4xl text-[rgb(27,32,59)]'>Sun & Storm</h2>
          </div>

          {!wheather && <div>

         

          <div className='flex justify-center'>
            <input type="text" placeholder="Enter City" className='border-2 h-12 w-95 ml-5 mt-4 rounded-xl
            rounded-r-none pl-2 bg-white' value={loc} onChange={(e)=>{
              setLoc(e.target.value)
            }}/>
            
            <button className='border-2 border-l-0 px-1.5 mt-4 rounded-xl rounded-l-none bg-[rgb(201,197,197)]
             cursor-pointer' onClick={()=>{
              setWheather(true)
             }}>Search</button>
             
          </div>

         <div className='bg-white rounded-2xl px-2 py-3 my-2'>
          {Array.isArray(data) && data.map((e, idx) => (
            <p key={idx} onClick={() => {setLoc(e.properties?.address_line1)}} className='border-b-1 my-1.5 cursor-pointer h-7'>{e.properties?.address_line1}: 
            {e.properties?.state}</p>
          ))}
         </div>

          </div>}

         {wheather && <WeatherForecast temp={temp?.main?.temp} des={temp?.weather[0]?.description} />}

        </div>
     </div>
    </>
  )
}

export default Bodies;  