import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API_URL = "https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10";

export default function MovieListing() {

    const [apiData,setApiData] = useState(null);

    const handleApi = () => { // Function to fetch and store api data to apiData state.
        axios.get(API_URL)
        .then(res => setApiData(res.data))
        .catch(err => console.log(err))
    }

    const renderMovies = () => { // Function to render <li> items with movie info.

        if(apiData !== null){ // If apiData has the information
            apiData.films.map(film => {
                return <li key = {film.id}>{`${film.title} (${film.duration_seconds} Seconds)`}</li>
            })
        }
    }

    return (
        <>
            <ul>
                {apiData === null ? "" : renderMovies()}
            </ul>
        </>
    )
}
