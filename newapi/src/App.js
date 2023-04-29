import React , { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { NavBar } from './components/NavBar';
import Home from './Pages/Home';
import Footer from './components/Footer';

import FetchData from './components/FetchData';
const App = () => {
  return(
   <>
   <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route  path="/general" element={<FetchData cat="general" />}/>
      <Route  path="/business" element={<FetchData cat="business"/>}/>
      <Route  path="/entertainment" element={<FetchData cat="entertainment"/>}/>
      <Route  path="/health" element={<FetchData cat="health"/>}/>
      <Route  path="/science" element={<FetchData cat="science"/>}/>
      <Route  path="/sports" element={<FetchData cat="sports"/>}/>
      <Route  path="/technology" element={<FetchData cat="technology"/>}/>
      
    </Routes>
    <Footer />
   </Router>
  
  </>
  );  
  
};

export default App
