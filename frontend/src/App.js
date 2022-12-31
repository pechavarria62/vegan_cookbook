import React from 'react';
import './App.css';
import HeaderContent from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
const App =()=> {
  return (
    <div className="app">
        <HeaderContent/>
        <Body/>
        <Footer/>
    </div>
  );
};
export default App;
