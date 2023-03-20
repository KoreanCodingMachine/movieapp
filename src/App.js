// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const api =
//     'https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1';

//   const [title, setTitle] = useState('');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const data = axios.get(api).then((res) => res.data.results);
//     setData(data);
//   }, []);

//   return (
//     <div>
//       {data.map((data) => {
//         return <div>{data.title}</div>;
//       })}
//     </div>
//   );
// }

// export default App;

import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {

  const [movies, setMovies] = useState([])
  
  // 네트워킹 & 데이터 파싱

  const getMovies = async () => {

    const movieAddress = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1'

     try {
       const { data, status } =  await axios.get(movieAddress)
       console.log(data.results)
       if (status === 200) {
         setMovies(data.results)
       }
     } catch (err) {
       console.log(err.message)
     }
  }


  useEffect(() => {
    getMovies()
  },[])

  return (
      <div>
        {movies && movies.map(movie => (
            <h1>{movie.title}</h1>
        ))}
      </div>
  );
};

export default App;