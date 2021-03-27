import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
