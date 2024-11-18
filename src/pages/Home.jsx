import React from 'react'
import { Navbar, HomeGoToCommonExpenses, HomeGoToCommonSpaces, HomeGoToFAQ, HomeGoToVisits } from '@components'

import DefaultBackground from '../assets/stockphotobuilding.jpg'

export const Home = () => {
  return (
    <div
      className='home'
      style={{
        display: 'flex',
        backgroundImage: `url(${DefaultBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        transition: 'background-image 0.5s ease'
      }}
    >
      {/* Cuadro de contenido */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f2f3f4',
          borderRadius: '12px',
          padding: '30px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0.2, 0.2, 0.4)',
          color: '#333',
          alignContent: 'center',
          alignItems: 'center',
          width: '100%',
          margin: '2%'
        }}
      >
        {/* Barra de navegación */}
        <Navbar />
        <hr />

        {/* Gastos comunes */}
        <HomeGoToCommonExpenses />
        <hr />

        {/* Espacios comunes */}
        <HomeGoToCommonSpaces />

        <hr />

        <div className='home__bottom' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Sección Izquierda */}
          <HomeGoToVisits />

          {/* Sección Derecha */}
          <HomeGoToFAQ />
        </div>
      </div>
    </div>
  )
}
