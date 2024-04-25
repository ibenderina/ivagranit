import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import About from './About';
import Benefits from './Benefits';
import Gallery from './Gallery';
import Contacts from './Contacts';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <Benefits />
    <Gallery />
    <Contacts />
  </React.StrictMode>
);

reportWebVitals();
