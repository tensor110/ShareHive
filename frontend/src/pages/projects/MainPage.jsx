import React from 'react'
import Header from '../../components/Header'
import Filter from './Filter'
import FilteredProjectsList from './FilteredProjectsList'

function MainPage() {
  return (
    <div>
        <Header />
        <FilteredProjectsList />
    </div>
  )
}

export default MainPage
