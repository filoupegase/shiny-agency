import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Footer from './_components/Footer';
import { ThemeProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
      <Router>
        <ThemeProvider>
          <GlobalStyle/>
          <App/>
          <Footer/>
        </ThemeProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
