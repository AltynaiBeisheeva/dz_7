// src/App.js
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;
