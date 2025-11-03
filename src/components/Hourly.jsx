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


      <div className='md:bg-[rgb(221,226,226)] md:h-350 md:w-screen md:flex md:justify-center'>
        <div className='md:bg-[rgb(252,253,253)] md:h-280 md:w-190 md:mt-24 md:rounded-xl'>
          <div className='md:border-b-2 md:border-b-[rgb(202,199,199)]'>
            <p className='md:text-xl md:font-bold md:pt-4 md:ml-4'>Hourly Weather: {user}</p>
          </div>

         <table border="1" className='md:w-full md:mt-10'>
              <tr>
                <th className='md:p-2 text-center'>Timming</th>
                <th className='md:p-2 text-center'>Temperature</th>
                <th className='md:p-2 text-center'>Humidity</th>
              </tr>
            
          {hour.map((el,ind)=>{

              if(ind<24){
          return(
              <>
              <tr>
                <td className='md:p-2 text-center'>{(ind<10)?`0${ind}:00`:`${ind}:00`}</td>
                <td className='md:p-2 text-center'>{el} &deg;C</td>
                <td className='md:p-2 text-center'>{hum[ind]}%</td>
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



