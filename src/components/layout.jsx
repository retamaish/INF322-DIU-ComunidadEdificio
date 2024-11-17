import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  Login,
  Home,
  FAQ as FrequentlyAskedQuestions,
  RegisterVisitors,
  RequestCommonSpaces,
  UserData,
  AccountStatement,
  PayMethods,
} from '@pages'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layout__page'>
          <Routes>
            <Route path='/iniciar-sesion' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/inscribir-visitas' element={<RegisterVisitors />} />
            <Route path='/reservar-espacios-comunes' element={<RequestCommonSpaces />} />
            <Route path='/preguntas-frecuentes' element={<FrequentlyAskedQuestions />} />
            <Route path='/usuario' element={<UserData />} />
            <Route path='/cartola' element={<AccountStatement />} />
            <Route path='/metodos-pago' element={<PayMethods/>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
