import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route  } from 'react-router-dom'
import Home from './routes/Home'
import Features from './routes/Features'
import Header from './components/Header'
import { Provider } from 'react-redux';
import { store } from './store';
import UserPreferences from './routes/UserPreferences';
import Destination from './routes/destination';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="preferences" element={<UserPreferences />} />
          <Route path="features" element={<Features />} />
          <Route path="destination" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
