import React from 'react'
import Header from './Header'
import CTA from '../pages/home/container/CTA'



const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <CTA />
        
    </div>
  )
}

export default MainLayout