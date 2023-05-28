import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Authors from './Pages/Authors'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App />} />
        <Route path ="/authors" element = {<Authors />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
