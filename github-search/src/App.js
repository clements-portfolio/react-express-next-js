/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* ~ ~ ~ ~ ~ { Import Screens & Components } ~ ~ ~ ~ ~ */
import Home from './screens/Home';
import Profile from './screens/Profile';
import About from './screens/About';
import NotFound from './screens/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* ~ ~ ~ ~ ~ { Main (React) Process } ~ ~ ~ ~ ~ */
function App() {
  /* - - - - - < Return JSX Markup /> - - - - - */
  return (
    <BrowserRouter>
      <Navbar title='GitHub Search' icon='fab fa-github' variant='navbar bg-primary' />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/:login' element={ <Profile /> } />
        <Route path='/about' element={ <About /> } />
        <Route element={ <NotFound /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

/* ~ ~ ~ ~ ~ { Export the Application } ~ ~ ~ ~ ~ */
export default App;