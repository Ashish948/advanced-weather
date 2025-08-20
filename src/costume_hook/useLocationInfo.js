import { useState, useEffect } from "react";

function useLocationInfo(location) {
    const [data, setData] = useState({})

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
        };

        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=3c23f2b6cf664b9d8f5fd14f85db7049`, requestOptions)
            .then(response => response.json())
            .then((result) => {
                setData(result.features)
            })
    }, [location])

    return data;

}
export default useLocationInfo;