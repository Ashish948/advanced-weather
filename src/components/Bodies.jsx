import React, { useState, useContext } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import useLocationInfo from '../costume_hook/useLocationInfo'
import useWeatherInfo from '../costume_hook/useWeatherInfo'
import Navbar from './Navbar'
import UserContext from '../context/UserContext'
import Today from './Today'
import Hourly from './Hourly';



function Bodies() {
  const [loc, setLoc] = useState("")
  const [today, setToday] = useState(false)

  let data = useLocationInfo(loc)

  let temp = useWeatherInfo(loc)

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();

  const consubmit = () => {
    setUser(loc)
  }

  return (
    <>
      <div className='relative w-screen bg-[url(/weth.jpg)] bg-no-repeat bg-cover'>

        <div className='flex flex-col w-full h-screen'>

          <div className='flex justify-center font-bold my-10'>
            <h2 className='text-6xl text-[rgb(27,32,59)] pt-15'>Sun & Storm</h2>
          </div>

          {!today &&

            <div className='flex items-center flex-wrap flex-col'>

              <div className='flex justify-center'>
                <input type="text" placeholder="Enter City" className='border-2 h-12 w-60 md:w-95 md:ml-5 rounded-xl
                rounded-r-none pl-2 bg-white outline-none' value={loc} onChange={(e) => {
                    setLoc(e.target.value)
                  }} />

                <button className='border-2 border-l-0 px-1.5 rounded-xl rounded-l-none bg-[rgb(201,197,197)]
                cursor-pointer' onClick={() => {
                    navigate("/Today")
                    setToday(true)
                    consubmit()
                  }}>Search</button>

              </div>

              <div className='bg-white rounded-2xl px-2 py-3 my-2 w-71 md:w-100'>
                {Array.isArray(data) && data.map((e, idx) => (
                  <p key={idx} onClick={() => { setLoc(e.properties?.address_line1) }} className='border-b-1 my-1.5 cursor-pointer h-7'>{e.properties?.address_line1}:
                    {e.properties?.state}</p>
                ))}
              </div>

            </div>

          }

          {today && <Today />}

        </div>


      </div>
    </>
  )
}

export default Bodies;  