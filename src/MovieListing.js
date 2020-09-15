import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API_URL = "https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10";

export default function MovieListing({minDuration = 5500}) {

    const [apiData,setApiData] = useState(null);

    // Function to fetch and store api data to apiData state.
    const handleApi = () => {
        axios.get(API_URL)
        .then(res => setApiData(res.data))
        .catch(err => console.log(err));
    }

    // Function to render the title.
    const renderTitle = () => {
        if(apiData !== null){ // If apiData has been loaded, then load the title.
            return apiData.title
        }
    }

    // Function to render <li> items with movie info.
    const renderMovies = () => {
        if(apiData !== null){ // If apiData has been loaded, then map each film correctly.
            return apiData.films.map(film => {
                if(film.duration_seconds > minDuration){
                    return <li key = {film.id}>{`${film.title} (${film.duration_seconds} Seconds)`}</li>
                } else {
                    return ""
                }
            })
        }
    }

    // Effect will happen when apiData state is changed.
    useEffect(() => {

        if(apiData === null){
            handleApi()
        }

        const refresh = setInterval(() => { // Run handleApi every 5 seconds
            handleApi()
        },5000);

        return () => { // Clear timer when component is unmounted. This is important so we don't have multiple timers.
            clearInterval(refresh);
        }
    },[apiData]);

    return (
        <>
            <h1>{renderTitle()}</h1>
            <ul>
                {renderMovies()}
            </ul>
        </>
    )
}
