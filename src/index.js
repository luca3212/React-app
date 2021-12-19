import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './pages/App';
import Product  from './pages/Product';


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="" element={<App/>} />
      <Route path="carousel/:site" element={<Product/>}/>
    </Routes>
  </Router>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
