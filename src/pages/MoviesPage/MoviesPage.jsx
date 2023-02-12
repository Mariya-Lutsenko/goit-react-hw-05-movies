import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api-movies';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesEditorList from 'components/MoviesEditorList/MoviesEditorList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMovie = searchParams.get('search');

  const searchMoviesBySearch = newSearch => {
    setSearchParams({ query: newSearch });
  };


  useEffect(() => {
    if (searchMovie) {
      const fetchMovies = async () => {
        try {
          const {results} = await searchMovies(searchMovie);
          setMovies(results);
        } catch (error) {
            setError(error.message);
        }
      };
      fetchMovies();
    }
  }, [searchMovie]);
console.log(movies)
  return (
    <main>
      <Searchbar onSubmit={searchMoviesBySearch} />
      {movies && <MoviesEditorList movies={movies} />}
      {error && <p>Something goes wrong</p>}
    </main>
  );
};
export default MoviesPage;
