import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route  } from 'react-router-dom'
import Home from './routes/Home'
import { Provider } from 'react-redux';
import { store } from './store';
import TravelEnvision from './routes/TravelEnvision';
import Destination from './routes/destination';
import UserBudget from './routes/UserBudget';
import UserPreferences from './routes/UserPreferences';
import TravellersKind from './routes/TravellersKind';
import TravelExperience from './routes/TravelExperience';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="travellers" element={<TravellersKind />} />
          <Route path="envision" element={<TravelEnvision />} />
          <Route path="experience" element={<TravelExperience />} />
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
