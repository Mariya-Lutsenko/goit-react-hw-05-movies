import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api-movies';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async() => {
        try{
        setLoading(true);
        const data = await fetchTrendingMovies();
        console.log(data);
        }
        catch{

        }
        finally{

        }
    };
    fetchTrending();
  
  },[]);


 /* data.hits.length === 0
  ? toast.error('Nothing found')
  : setPictures(prevPictures => [...prevPictures, ...data.hits]);
setTotalHits(data.totalHits);
} catch (error) {
setError(error.message);
} finally {
setLoading(false);
}
};
fetchPictures();
}, [search, page]);
*/




  return (
    <>
      <h1>Tranding today</h1>
    </>
  );
};
export default HomePage;
