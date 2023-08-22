import React from 'react';
import ReactDOM from 'react-dom/client'; //This line imports the ReactDOM library, which is used for rendering React components into the DOM.

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// This line calls the reportWebVitals function, which can be used to measure and report performance metrics in the application. It provides insights into various performance aspects like page load times, rendering times, and more.
