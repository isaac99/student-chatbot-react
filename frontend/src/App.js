import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import logo from './logo.svg';
import headshot from './images/justin_picture.jpeg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import History from './pages/History';
import { Login } from './components/Login';
import { Redirect } from './components/Redirect.js';
import { ProtectedRoute } from './components/ProtectedRoute';



import './App.css';
import { authInstance } from './index.js';

function App({authenticated}) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/" element={
          <ProtectedRoute element={
                <Main authInstance={authInstance.idTokenParsed}></Main>
            } 
          />
          } 
        />
        <Route path="/message-history" element={<ProtectedRoute element={History} />} />
        <Route path="/about" element={<ProtectedRoute element={About} />} />
        <Route path="/services" element={<ProtectedRoute element={Services} />} />
        <Route path="/contact" element={<ProtectedRoute element={Contact} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
