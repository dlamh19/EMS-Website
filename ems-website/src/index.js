import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import HallRental from './Components/HallRental'
import HowToJoin from './Components/HowToJoin'
import Footer from './Components/Footer'
import Donation from './Components/Donation'
import StripeContainer from './Components/StripeContainer'



import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <About />
    <HowToJoin />
    <HallRental />
    <Donation />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
