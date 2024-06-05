import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarRating from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating noOfStars={5}/>
  </React.StrictMode>
);
