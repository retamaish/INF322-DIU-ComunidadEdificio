import React from 'react'
import { H1, H2 } from '@components'
import { useNavigate } from 'react-router-dom'

export const RegisterVisitors = () => {
  const navigate = useNavigate()
  const handleRegister = () => {
    alert('Visitante registrado con exito.')
  }
  return (
    <div className='register-visitors' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <H1>Inscribe tu Visita</H1>
      <div className='register-visitors__container' style={{ display: 'flex', gap: '2rem' }}>
        {/* formulario ingreso nuevo visitante */}
        <div className='register-visitors'>
          <H2 className='register-visitors__subtitle'>Agendar Visitante</H2>

          <form className='form'>
            {/* Rut */}
            <div className='form__group'>
              <label className='form__label' htmlFor='rut'>Rut</label>
              <input className='form__input' type='text' id='rut' pattern='^\d{7,8}-[0-9kK]$' size='30' autoComplete='on' placeholder='12345678-9' required />
            </div>
            {/* Nombre */}
            <div className='form__group' style={{ marginTop: '24px' }}>
              <label className='form__label' htmlFor='name'>Nombre</label>
              <input className='form__input' type='text' id='name' name='name' placeholder='Nombre' required />
            </div>
            {/* Apellidos */}
            <div className='form__group' style={{ marginTop: '24px' }}>
              <label className='form__label' htmlFor='lastName'>Apellidos</label>
              <input className='form__input' type='text' id='lastName' name='lastName' placeholder='Apellidos' required />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label><input style={{ marginTop: '24px' }} type='checkbox' name='option' value='option1' />¿Guardar como visitante frecuente?</label>
              <button 
              style={{ marginTop: '24px', width: '100%' }} 
              type='submit' 
              className='button button__submit'
              onClick={()=>handleRegister()}>Registrar</button>
            </div>
          </form>
        </div>

        {/* VISITANTES REGISTRADOS */}
        <div className='visitors'>
          <H2 className='visitors__subtitle'>Visitantes registrados:</H2>
          <form className='form'>
            <button
              className='button button__submit'
              style={{ marginTop: '24px', width: '100%' }}
              type='submit'
              onClick={() => navigate('/')}
            >
              Volver al inicio
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
