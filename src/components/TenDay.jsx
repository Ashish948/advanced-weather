import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

function TenDay() {

  const {user, setUser} = useContext(UserContext)

    const[lon, setLon] = useState();
    const[lat, setLat] = useState();

    const[week, setWeek] =  useState([])
    const[hum, setHum] = useState([])

  useEffect(() => {
     const fetchWeather = async () => {
       try {
         const res = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=67abddbc99f3abe437cc2cb9d2e9e753`
         );
         const result = await res.json();
   
         console.log(result);
   
         setLon(result?.coord?.lon);
         setLat(result?.coord?.lat);
       } catch (error) {
         console.error("Error fetching weather data:", error);
       }
     };
   
     if (user) {
       fetchWeather();
     }
   }, [user]);



   useEffect(() => {
     const fetchForecast = async () => {
       try {
         const res = await fetch(
           `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m&timezone=auto`
         );
         const result = await res.json();
   
         setWeek(result?.hourly?.temperature_2m || []);
         setHum(result?.hourly?.relative_humidity_2m || []);
       } catch (error) {
         console.error("Error fetching forecast data:", error);
       }
     };
   
     if (lat && lon) {
       fetchForecast();
     }
   }, [lat, lon]);
   
  

  return (
    <div className='bg-[rgb(221,226,226)] h-225 w-screen flex justify-center'>

      <div className='bg-[rgb(252,253,253)] h-145 w-180 mt-24 rounded-xl'>

            <div className='border-b-2 border-b-[rgb(202,199,199)] flex justify-center'>
                <p className='text-2xl font-bold py-7'>Weekly ForeCast: </p>
            </div>

            <div className='border-b-2 border-b-[rgb(202,199,199)] flex justify-around'>
                <p className='text-xl py-4'>Day 1</p>
                <p className='text-xl py-4 '>{week[11]} &deg;C</p>
                <p className='text-xl py-4'> {hum[11]}%</p>
            </div>

            <div className='border-b-2 border-b-[rgb(202,199,199)] flex justify-around'>
                <p className='text-xl py-4'> Day 2</p>
                <p className='text-xl py-4 '>{week[11]} &deg;C</p>
                <p className='text-xl py-4'> {hum[34]}%</p>
            </div>

            <div className='border-b-2 border-b-[rgb(202,199,199)] flex justify-around'>
                <p className='text-xl py-4'> Day 3</p>
                <p className='text-xl py-4 '>{week[11]} &deg;C</p>
                <p className='text-xl py-4'> {hum[57]}%</p>
            </div>

            <div className='border-b-2 border-b-[rgb(202,199,199)] flex justify-around'>
                <p className='text-xl py-4'> Day 4</p>
                <p className='text-xl py-4 '>{week[11]} &deg;C</p>
                <p className='text-xl py-4'> {hum[80]}%</p>
            </div>

            <div className='border-b-2 border-b-[rgb(202,199,199)] flex justify-around'>
                <p className='text-xl py-4'> Day 5</p>
                <p className='text-xl py-4 '>{week[11]} &deg;C</p>
                <p className='text-xl py-4'> {hum[103]}%</p>
            </div>

            <div className='border-b-2 border-b-[rgb(202,199,199)] flex justify-around'>
                <p className='text-xl py-4'> Day 6</p>
                <p className='text-xl py-4'>{week[11]} &deg;C</p>
                <p className='text-xl py-4 ml-4'> {hum[126]}%</p>
            </div>

            <div className='border-b-2 border-b-[rgb(202,199,199)] flex justify-around'>
                <p className='text-xl py-4'> Day 7</p>
                <p className='text-xl py-4 '>{week[11]} &deg;C</p>
                <p className='text-xl py-4'> {hum[149]}%</p>
            </div>
        </div>

    </div>
  )
}

export default TenDay