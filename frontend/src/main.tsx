import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error.tsx'
import Blog from './pages/Blog/Blog.tsx'
import BlogNew from './pages/Blog/BlogNew.tsx'
import './index.css'
import Header from './components/Header/header.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/new' element={<BlogNew />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
