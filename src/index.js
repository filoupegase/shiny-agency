import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import './index.css';


const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`;

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <GlobalStyle/>
        <App/>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
