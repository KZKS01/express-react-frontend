import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'; // update to index.scss
import App from './App';
//monitor the performance of the application and report any issues that may affect the user experience
import reportWebVitals from './reportWebVitals';
//imports the BrowserRouter component from the react-router-dom library and assigns it to a variable named Router
//can use to create complex, multi-page applications with client-side routing
import { BrowserRouter as Router } from 'react-router-dom';
import Component from './components/Component';

//ReactDOM is a package that serves as the entry point to the DOM and server renderers for React. 
//It is responsible for rendering React components to the DOM and managing their updates
//createRoot() method is a new API in React 18 that allows for concurrent rendering of multiple roots in a single application.
const root = ReactDOM.createRoot(document.getElementById('root'));
// render a React component to the DOM
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

