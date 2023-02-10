import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/movies-api';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () =>{
    const [movies, setMovies] = useState([]);
    return (
        <>
        <h1>Tranding today</h1>

        
        </>
    )
}
export default HomePage;