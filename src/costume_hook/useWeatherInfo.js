import React, {useState, useEffect} from 'react'

function useWeatherInfo(location) {
  const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=67abddbc99f3abe437cc2cb9d2e9e753`, requestOptions)
                const result = response.json
                setData(result)
            }catch (error) {
                setData([])
            }
        };
    }, [])

    return data;
    
}

export default useWeatherInfo