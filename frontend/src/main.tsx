import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './components/Header/header.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>,
)
