import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import logo from './logo.svg';
import headshot from './images/justin_picture.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Main />
      <Footer />
    </div>
  );
}

export default App;
