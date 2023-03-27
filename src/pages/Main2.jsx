import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link } from "react-router-dom";
import { Col, Row , Card , Button , Spin, Rate} from 'antd';


function Main2() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    // 이미지 주소
    const url = 'https://image.tmdb.org/t/p/w500'

    // 네트워킹 & 데이터 파싱

    const getMovies = async () => {
        const movieAddress = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1'

        try {
            const { data , status } = await axios.get(movieAddress)
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
       <>
           {
               loading ? <div style={{display:'flex',minHeight:'100vh',justifyContent:'center',alignItems:'center'}}><Spin size='large'/></div>
                   : <Row justify='space-around' gutter={[6,20]}>
                   {movies && movies.map((movie) => (
                       <Col>
                           <Card
                               title={movie.title}
                               bordered={true}
                               style={{
                                   width: 300,
                               }}
                               key={movie.id}
                               cover={<img alt={movie.title} src={`${url}/${movie.poster_path}`}/>}
                           >
                              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                  <p>ID: {movie.id}</p>
                                  <p>Vote Count: {movie.vote_count}</p>
                                  <Rate disabled defaultValue={movie.vote_average / 2} />
                                  <Link to={`/${movie.id}`}>
                                      <Button style={{marginTop:'20px'}}>자세히 보기</Button>
                                  </Link>
                              </div>
                           </Card>
                       </Col>
                   ))}
               </Row>
           }

       </>
    );
}

export default Main2;