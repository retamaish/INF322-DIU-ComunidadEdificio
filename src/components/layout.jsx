import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title'>Comunidad Edificio</h1>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
