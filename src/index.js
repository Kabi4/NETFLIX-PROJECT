import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./globalStyles";
import "normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); 