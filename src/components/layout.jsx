import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login, Home } from '@pages'
import { Visita } from '../pages/inscribirVisita'
import { Solicitud } from '../pages'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/inscribirVisita' element={<Visita />} />
            <Route path='/espaciosComunes' element={<Solicitud />} />


          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
