import React, { useEffect, useState } from 'react'
import instance from '../requestApis/baseurl'
import './Banner.css'


function Banner({ fetchurl }) { 
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([])

    const accessMovies = async () => {
        const result = await instance.get(fetchurl)
        // console.log(result.data.results);
        setMovies(result.data.results[Math.floor(Math.random() * (result.data.results.length - 1))]);
    }
    console.log(movies);

    useEffect(() => {
        accessMovies()
    }, [])
    return (
        <div className='banner' style={{ backgroundImage: `url(${base_url}${movies.backdrop_path})` }}>
            <h1 className='title'>{movies?.title}</h1>
            <div className='overview'>
                <h4>{movies?.overview}</h4>
            </div>
        </div>
    )
}

export default Banner


