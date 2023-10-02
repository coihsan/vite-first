import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import Root from "./pages/Services";
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)