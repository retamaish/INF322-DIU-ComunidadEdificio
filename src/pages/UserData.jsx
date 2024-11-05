import React from 'react'
import { H1, H3, P } from '@components'
import { useNavigate } from 'react-router-dom'
import ImageUser from '../assets/user_default.jpg'

export const UserData = () => {
  const navigate = useNavigate()
  return (
    <div className='user-data' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <H1>Datos del Usuario:</H1>
      <div className='user-data__container' style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
        {/* Foto del usuario */}
        <div className='user-data__image-container' style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <img className='user-data__image' src={ImageUser} alt='Usuario' style={{ width: '100px', height: 'auto' }} />
        </div>

        {/* Datos del usuario */}
        <div className='user-data__info'>
          <form className='form'>
            <div className='form__group' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Contenedor para cada par de nombre y dato */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <H3>Nombre:</H3>
                <P>Armando Casas</P>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <H3>Departamento:</H3>
                <P>Departamento 1234 - Torre A, Condominio Santa María</P>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <H3>Estado de Cuenta:</H3>
                <P>Pagado</P>
              </div>
            </div>

            <div className='button-container' style={{ display: 'flex', gap: '2rem', marginTop: '24px', justifyContent: 'center' }}>
              <button type='button' className='button button__submit' onClick={() => navigate('/')}>Volver al inicio</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
