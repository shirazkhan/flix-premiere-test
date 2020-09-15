import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API_URL = "https://api.flixpremiere.com/v1/films/filter/now_showing?limit=10";

export default function MovieListing() {

    const [apiData,setApiData] = useState(null);

    return (
        <>
            <ul>

            </ul>
        </>
    )
}
