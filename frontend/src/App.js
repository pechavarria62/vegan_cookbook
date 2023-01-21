import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Favorites from './pages/Favorites';
import News from './pages/News';
import Registration from './pages/Registration';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
const App =()=> {
  return (
    <BrowserRouter>
      <Header/>
      <div className="app">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/News" element={<News />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
        <Body/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
