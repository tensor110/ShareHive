import React from 'react'
import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'
import FilteredProjectsList from '../../components/filter/FilteredProjectsList'

function MainPage() {
  return (
    <MainLayout>
        <FilteredProjectsList />
    </MainLayout>
  )
}

export default MainPage