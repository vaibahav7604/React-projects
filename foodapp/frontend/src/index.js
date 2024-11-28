import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import StroeContextProvider from './context/StoreContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <StroeContextProvider>
  <App />
  </StroeContextProvider>
  </BrowserRouter>
  
);

reportWebVitals();
