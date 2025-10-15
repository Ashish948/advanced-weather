import { useState, useEffect } from "react";

function useLocationInfo(location) {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=3c23f2b6cf664b9d8f5fd14f85db7049`);
                const result = await response.json();
                setData(result.features);
            } catch (error) {
                setData([]); // or handle error as needed
            }
        };

        if (location) fetchData();
    }, [location]);

    return data;

}
export default useLocationInfo;