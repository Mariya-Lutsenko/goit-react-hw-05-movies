import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import HomePage from 'pages/HomePage/HomePage';

const App = () => {
  return (
    <>
    <Navigation />
    <Container>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path ='*' element ={<Navigate to="/" />}/>
      </Routes>
    </Container>
    </>
  );
};

export default App;
