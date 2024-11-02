import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/login'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
