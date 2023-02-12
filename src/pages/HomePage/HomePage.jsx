import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api-movies';
import MoviesTrendingList from 'components/MoviesTrendingList/MoviesTrendingList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchTrending();
  }, []);
  console.log(movies);
  return (
    <main>
      <h1>Tranding today</h1>
      {movies && <MoviesTrendingList movies={movies} />}
      {error && <p>Something goes wrong</p>}
    </main>
  );
};
export default HomePage;
