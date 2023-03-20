import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const {movie_id} = useParams()
    const [movie, setMovie] = useState({})

    // 데이터 핸들링
    const getMovie = async () => {

        // const api = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`

        const movieAddress = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`
        console.log(movieAddress)
        try {
           const {data, status} = await axios.get(movieAddress)
           if (status === 200) {
               setMovie(data)
           }
        } catch(err) {
            console.log('error', err)
        }
    }

    console.log('+++++++++++++++++', movie)

    useEffect(()=>{
        getMovie()
    },[])

    return (
        <div>
            <h1>{movie.title}</h1>

        </div>
    );
};

export default Detail;