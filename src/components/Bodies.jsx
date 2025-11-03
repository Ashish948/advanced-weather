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
      <div className='md:relative md:w-screen md:bg-[url(public/weth.jpg)] md:bg-no-repeat md:bg-cover'>

        <div className='md:flex md:flex-col md:w-full md:h-screen'>

          <div className='md:flex md:justify-center md:font-bold md:my-10'>
            <h2 className='md:text-6xl md:text-[rgb(27,32,59)] md:pt-15'>Sun & Storm</h2>
          </div>

          {!today &&

            <div className='md:flex md:items-center md:flex-wrap md:flex-col'>

              <div className='md:flex md:justify-center'>
                <input type="text" placeholder="Enter City" className='md:border-2 md:h-12 md:w-95 md:ml-5 md:rounded-xl
                md:rounded-r-none md:pl-2 md:bg-white outline-none' value={loc} onChange={(e) => {
                    setLoc(e.target.value)
                  }} />

                <button className='md:border-2 md:border-l-0 md:px-1.5 md:rounded-xl md:rounded-l-none md:bg-[rgb(201,197,197)]
                md:cursor-pointer' onClick={() => {
                    navigate("/Today")
                    setToday(true)
                    consubmit()
                  }}>Search</button>

              </div>

              <div className='md:bg-white md:rounded-2xl md:px-2 md:py-3 md:my-2 md:w-100'>
                {Array.isArray(data) && data.map((e, idx) => (
                  <p key={idx} onClick={() => { setLoc(e.properties?.address_line1) }} className='md:border-b-1 md:my-1.5 md:cursor-pointer md:h-7'>{e.properties?.address_line1}:
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