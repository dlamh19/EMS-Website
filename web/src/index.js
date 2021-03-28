import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import HallRental from './components/HallRental'
import HowToJoin from './components/HowToJoin'
import Footer from './components/Footer'
import Donation from './components/Donation'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <About />
    <HowToJoin />
    <HallRental />
    <Donation />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
