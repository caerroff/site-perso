import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error.tsx'
import Blog from './pages/Blog/Blog.tsx'
import BlogNew from './pages/Blog/BlogNew.tsx'
import Calendar from './pages/Calendar/Calendar.tsx'
import Login from './pages/Login/index.tsx'
import Formation from './pages/Formation/index.tsx'
import './index.css'
import Header from './components/Header/header.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/index.tsx'
import Projects from './pages/Projects/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/new' element={<BlogNew />} />
        <Route path='/formation' element={<Formation />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
