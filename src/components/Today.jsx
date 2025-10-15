import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

function today() {
  
  const {user, setUser} = useContext(UserContext)

  const[feel, setFeel] = useState();
  const[hum, setHum] = useState();
  const[pre, setPre] =  useState();
  const[vis, setVis] = useState();
  const[speed, setSpeed] = useState();
  const[all, setAll] = useState();

  useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=67abddbc99f3abe437cc2cb9d2e9e753`)
      .then(response => response.json())
      .then((result) => {
        setFeel(result.main?.temp)
        setHum(result.main?.humidity)
        setPre(result.main?.pressure)
        setVis(result.visibility)
        setSpeed(result.wind?.speed)
        setAll(result.clouds?.all)
      })
  }, [user])


  return (
    <>
    <div className='flex flex-col items-center bg-[rgb(221,226,226)] h-screen w-screen'>
      
            <div className='flex justify-center'>
                <p className='pt-15 font-bold text-2xl text-[rgb(80,78,78)]'>Weather Today in {user}, India.</p>
            </div>

            <div className='mt-20'>
              <img src="cld.jpeg" className='h-110 w-200 relative rounded-4xl'/>
            </div>

            <div className='absolute h-50 pt-15'>

                  <div className='flex justify-center h-60 mt-48'>
                    <div className='w-90 flex flex-col justify-between py-4 px-4'>
                        <div className='text-2xl font-bold flex justify-between text-[rgb(235,230,230)]'>Temperature: {Math.round(feel-273)} &#176;C</div>
                        <div className='text-2xl font-bold flex justify-between text-[rgb(235,230,230)]'>Humidity: {hum}&#37;</div>
                        <div className='text-2xl font-bold flex justify-between text-[rgb(235,230,230)]'>Pressure: {pre} mb</div>
                    </div>

                    <div className='w-75 flex flex-col justify-between py-4 px-4'>
                        <div className='text-2xl font-bold flex justify-between text-[rgb(235,230,230)]'>Visibilitiy: {vis} m</div>
                        <div className='text-2xl font-bold flex justify-between text-[rgb(8235,230,230)]'>Wind Speed: {speed} km/h</div>
                        <div className='text-2xl font-bold flex justify-between text-[rgb(235,230,230)]'>Clouds: {all}</div>
                    </div>

                  </div>
          </div>

    </div>
     
    </>
  )
}

export default today








