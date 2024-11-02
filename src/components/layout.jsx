import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login, Home } from '@pages'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
