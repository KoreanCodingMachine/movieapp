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
import {Container, Button, Card, Row, Col , Spinner} from "react-bootstrap";
import {Link } from "react-router-dom";

const Main = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    //   이미지 주소
    const url = 'https://image.tmdb.org/t/p/w500'

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
            console.log("+++++++++++++++++++", err.message)
        }
    }


    useEffect(() => {
        setTimeout(()=>{
            getMovies()
            setLoading(false)
        },2000)
    },[])

    return (
        <Container>
            <Row>
                {movies && movies.map((movie) => (
                    <Col>
                        <Card style={{ width: '20rem', border:'dark', marginTop: '2rem'}}>
                            <Card.Img variant="top" src = {`${url}/${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title.slice(0, 10)}</Card.Title>
                                <Card.Text>
                                    {movie.overview.slice(0, 80)}
                                </Card.Text>
                                <Link to={`/${movie.id}`}>
                                    <Button variant="primary">자세히 보기</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Main;

// 복사 붙여넣기 금지

// 코드 빌드 순서
/*

  1. 코드는 위에서 아래로 빌드한다.
  2. = 을 기준으로 오른쪽에서 왼쪽으로 치환한다.
  3. . 은 하위 메소드를 호출한다.
  4. () 은 함수들의 모음으로 해석한다.
  5. , 는 그리고로 해석한다.

 */

// 부트스트랩 설치 및 사용법

/*
    1. public에 index.html 에 cdn 방식 or index.js에 global 방식
    2. Row 는 한 줄 , Col은 한 줄에서 갯수
*/

// 네트워크 & 데이터 파싱

/*
    1. async await을 사용해 비동기 방식으로 통신 + try ~ catch 문 활용
    2. 구조분해할당을 이용해 통신으로 가져온 데이터를 구조분해한다.
    3. status 활용 
 */


// 라우팅 활용 

/*
    1. 기존에 사용하던 방식 말고 router라는 파일을 만들어서 createBrowserRouter hook을 활용해 배열 형태로 사용한다.
    2. 파람 값 가져올떄 useParams() 사용
*/

