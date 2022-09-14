import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route  } from 'react-router-dom'
import Home from './routes/Home'
import { Provider } from 'react-redux';
import { store } from './store';
import TravelType from './routes/TravelType';
import Destination from './routes/destination';
import UserBudget from './routes/UserBudget';
import UserPreferences from './routes/UserPreferences';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="envision" element={<TravelType />} />
          <Route path="destination" element={<Destination />} />
          <Route path="budget" element={<UserBudget />} />
          <Route path="preferences" element={<UserPreferences />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
