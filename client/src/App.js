import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'; 
import Footer from './components/Footer/Footer';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home'; //not used atm
import About from './pages/about';
import Contact from './pages/contact';
import Shipping from './pages/shipping';
import Products from './pages/Products.js';



const App = () => (
  <Router>
    <Navbar />
    
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/shipping' element={<Shipping/>} />
      <Route path='/Products' element={<Products/>} />
      {/*<Route path='/sign-in' element={ } />*/}
      <Route path='/' exact element={<Home />} />
    </Routes>
    <Footer />
  </Router>
  
)

export default App;