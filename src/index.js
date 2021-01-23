import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Home } from './pages/home'
import { Routes } from './pages/routes'
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Routes />
    </React.StrictMode>,
  document.getElementById('root')
);

