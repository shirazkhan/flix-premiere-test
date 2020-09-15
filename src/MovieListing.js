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

        if(apiData !== null){ // Check if apiData has the data yet.
            return apiData.films.map(film => {
                return <li key = {film.id}>{`${film.title} (${film.duration_seconds} Seconds)`}</li>
            })
        }
    }

    useEffect(() => { // Effect will happen when component mounts.
        setInterval(() => {
            handleApi()
        },5000)
    },[]);

    return (
        <>
            <h1>Title</h1>
            <ul>
                {apiData === null ? "" : renderMovies()}
            </ul>
        </>
    )
}
