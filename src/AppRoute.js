import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './pages/Home';
import Rent from './pages/Rent';
import Sale from './pages/Sale';

const AppRoute = () => {
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
  )
}

export default AppRoute
