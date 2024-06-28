import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ProjectDetailPage from './pages/home/projectDetail/ProjectDetailPage'
import ProjectsPage from './pages/projects/MainPage'
const App = () => {
  return (
    <div className='App font-opensans '>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
        
    </div>
  )
}

export default App