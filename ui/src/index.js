import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainWrapper from './components/MainWrapper';
import TablesPage from './pages/TablesPage';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<MainWrapper />}>
          <Route path="login" element={<LoginPage />}/>
          <Route path="tables" element={<TablesPage />}/>
        </Route>
        {/* default route */}
        <Route path="*" element={<Navigate to="tables" />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
