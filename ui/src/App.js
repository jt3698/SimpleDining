import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8000/ping';

const App = () => {
  const [message, setMessage] = React.useState('')
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
