import React, {useState, useEffect} from 'react'

function useWeatherInfo(location) {
  const [data, setData] = useState({})

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
        };

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=67abddbc99f3abe437cc2cb9d2e9e753`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                setData(result)
            })
    }, [location])

    return data;
    
}

export default useWeatherInfo