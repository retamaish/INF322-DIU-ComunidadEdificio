import React from 'react'
import { Navbar, HomeGoToCommonExpenses, HomeGoToCommonSpaces, HomeGoToVisits } from '@components'
import { H1 } from '@typography'
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
          margin: '1%'
        }}
      >
        {/* Barra de navegación */}
        <Navbar />
        <hr />
        <H1 style={{ marginTop: '0', marginBottom: '8px', textAlign: 'left', width: '100%' }}>Inicio</H1>
        {/* Gastos comunes */}
        <HomeGoToCommonExpenses />
        <hr />

        <div className='home__mid'>
          {/* Espacios comunes */}
          <HomeGoToCommonSpaces />

          {/* Inscribe a tu visita */}
          <HomeGoToVisits />
        </div>
        <hr />
      </div>
    </div>
  )
}
