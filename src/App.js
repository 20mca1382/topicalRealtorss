import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Header from './Components/Header/Header';
import Home from './pages/Home';
import Rent from './pages/Rent';
import Sale from './pages/Sale';
 

function App() {
  return (
    <>
    
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/rent' element={<Rent/>} /> 
      <Route path='/sale' element={<Sale/>}/>
    </Routes>
    </Router>
      
    </>
  );
}

export default App;
