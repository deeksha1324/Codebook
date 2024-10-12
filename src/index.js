import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './components';
import { FilterProvider } from './context';


import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <cartProvider>
        <FilterProvider>
            <ScrollToTop />
            <ToastContainer  closeButton={false} autoClose={3000} position={'bottom-right'} />
            <App />
        </FilterProvider>
      </cartProvider>
    </BrowserRouter>
  </React.StrictMode>
);




