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

            


                  <div className='flex justify-center mt-10 h-150 w-300'>
                    <div className='max-w-2xl h-150 w-300 bg-[url("/ccc.jpeg")] bg-cover bg-center bg-no-repeat rounded-4xl p-4 flex-col' style={{backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className='flex justify-between py-35 px-17'>
                        <div className='text-md md:text-2xl font-bold flex justify-between text-black'>{Math.round(feel-273)} &#176;C</div>
                        <div className='text-md md:text-2xl font-bold flex justify-between text-black'>{vis} m</div>
                        <div className='text-md md:text-2xl font-bold flex justify-between text-black'>{hum}&#37;</div>
                        
                    </div>

                    <div className='flex justify-between py-30 px-12'>
                        
                        <div className='text-md md:text-2xl font-bold flex justify-between text-black'>{speed} km/h</div>
                        <div className='text-md md:text-2xl font-bold flex justify-between text-black pr-10'>{pre} mb</div>
                        <div className='text-md md:text-2xl font-bold flex justify-between text-black pr-11'>{all}</div>
                    </div>

                    </div>
         

    </div>
    </div>
     
    </>

    
  )
}

export default today








