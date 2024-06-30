import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import Projects from './container/Projects'

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      
    </MainLayout>
  )
}

export default HomePage;