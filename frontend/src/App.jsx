import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import './App.css'
import ProjectDetailPage from './pages/home/projectDetail/ProjectDetailPage'
const App = () => {
  return (
    <div className='App font-opensans '>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/project' element={<ProjectDetailPage />} />
        </Routes>
        
    </div>
  )
}

export default App