import { useState, useEffect } from "react";

function useLocationInfo(location) {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/geocode?text=${location}`);
                const result = await response.json();
                setData(result.features || []);
            } catch (error) {
                console.error('Error fetching location:', error);
                setData([]); 
            }
        };

        if (location) fetchData();
    }, [location]);

    return data;

}
export default useLocationInfo;