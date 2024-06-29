import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import SignIn from './pages/home/signin/AuthPaage'
import ForgotPassword from './pages/home/signin/ForgotPassword'
import ResetPassword from './pages/home/signin/ResetPassword'
import ProjectDetailPage from './pages/home/projectDetail/ProjectDetailPage'
import ProjectsPage from './pages/projects/MainPage'

const App = () => {
  return (
    <div className='App font-opensans '>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route index path='/signin' element={<SignIn />} />
        <Route index path='/forgot-password' element={<ForgotPassword />} />
        <Route index path='/reset-password' element={<ResetPassword />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
        
    </div>
  )
}

export default App