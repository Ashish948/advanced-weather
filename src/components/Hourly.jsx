import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

function Hourly() {

  const {user, setUser} = useContext(UserContext)
  const[long, setLong] = useState();
  const[lat, setLat] = useState();

  const[hour, setHour] = useState([]);
  const[hum, setHum] = useState([]);


  useEffect(() => {
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=67abddbc99f3abe437cc2cb9d2e9e753`
      );
      const result = await res.json();

      console.log(result);

      setLong(result?.coord?.lon);
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
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relative_humidity_2m&timezone=auto`
      );
      const result = await res.json();

      setHour(result?.hourly?.temperature_2m || []);
      setHum(result?.hourly?.relative_humidity_2m || [])
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  if (lat && long) {
    fetchForecast();
  }
}, [lat, long]);

  return (
    <>


      <div className='bg-[rgb(221,226,226)] h-350 w-screen flex justify-center'>
        <div className='bg-[rgb(252,253,253)] h-280 w-190 mt-24 rounded-xl'>
          <div className='border-b-2 border-b-[rgb(202,199,199)]'>
            <p className='text-xl font-bold pt-4 ml-4'>Hourly Weather: {user}</p>
          </div>

         <table border="1" className='w-full mt-10'>
              <tr>
                <th className='p-2 text-center'>Timming</th>
                <th className='p-2 text-center'>Temperature</th>
                <th className='p-2 text-center'>Humidity</th>
              </tr>
            
          {hour.map((el,ind)=>{

              if(ind<24){
          return(
              <>
              <tr>
                <td className='p-2 text-center'>{(ind<10)?`0${ind}:00`:`${ind}:00`}</td>
                <td className='p-2 text-center'>{el} &deg;C</td>
                <td className='p-2 text-center'>{hum[ind]}%</td>
              </tr>
              </>
            )
              }

            
          })}

          </table>
        </div>
      </div>
    </>
  )
}

export default Hourly



