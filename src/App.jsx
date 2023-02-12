import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage  = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage'));

const App = () => {
  return (
    
    
    <Container>
      <Navigation />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movies/:movieId' element ={<MovieDetailsPage/>}/>
        <Route path ='*' element ={<Navigate to="/" />}/>
      </Routes>
      </Suspense>
    </Container>
    
  );
};

export default App;