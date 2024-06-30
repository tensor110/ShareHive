import React from 'react'
import Header from '../../components/Header'
import FilteredProjectsList from '../../components/filter/FilteredProjectsList'

function MainPage() {
  return (
    <div>
        <Header />
        <FilteredProjectsList />
    </div>
  )
}

export default MainPage
