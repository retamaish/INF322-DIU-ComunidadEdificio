import React from 'react'
import { H1, P, Navbar } from '@components'
import { useNavigate } from 'react-router-dom'

import DefaultBackground from '../assets/stockphotobuilding.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export const UserData = () => {
  const navigate = useNavigate()
  return (
    <div
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
          boxShadow: '0 4px 6px rgba(0, 0.2, 0.2, 0.1)',
          color: '#333',
          alignContent: 'center',
          alignItems: 'center',
          width: '100%',
          margin: '2%'
        }}
      >
        <Navbar />
        <hr />

        <div className='user-data' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <H1>Tu cuenta</H1>
          <div className='user-data__container' style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            {/* Foto del usuario */}
            <div className='user-data__image-container' style={{ display: 'flex', alignItems: 'center' }}>
              <AccountCircleIcon sx={{ fontSize: 150 }} />
            </div>

            {/* Datos del usuario */}
            <div className='user-data__info'>
              <form className='form'>
                <div className='form__group' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Contenedor para cada par de nombre y dato */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <P className='font-bold' style={{ margin: 0 }}>Nombre:</P>
                    <P style={{ margin: 0 }}>Armando Casas Casas</P>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <P className='font-bold' style={{ margin: 0 }}>Correo:</P>
                    <P style={{ margin: 0 }}>usuario@usuario.com</P>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <P className='font-bold' style={{ margin: 0 }}>RUT:</P>
                    <P style={{ margin: 0 }}>12.345.678-9</P>
                  </div>

                </div>
                <div className='user-data__buttons'>
                  <div className='button-container' style={{ display: 'flex', gap: '2rem', marginTop: '24px', justifyContent: 'center' }}>
                    <button type='button' className='button button__submit' onClick={() => window.alert('Función no implementada todavia')}>Editar perfil</button>
                  </div>
                  <div className='button-container' style={{ display: 'flex', gap: '2rem', marginTop: '24px', justifyContent: 'center' }}>
                    <button type='button' className='button button__submit' onClick={() => navigate('/')}>Volver al inicio</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
