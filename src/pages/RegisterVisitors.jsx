import React, { useState } from 'react'
import { H1, H2 } from '@components'
import { useNavigate } from 'react-router-dom'

export const RegisterVisitors = () => {
  const navigate = useNavigate()

  const [visitorFirstName, setVisitorFirstName] = useState('')
  const [visitorLastName, setVisitorLastName] = useState('')

  const [visitors, setVisitors] = useState(
    [
      { index: 1, firstName: 'RAFAEL', lastName: 'DONOSO ECHEVERRIA' },
      { index: 2, firstName: 'SANDRA', lastName: 'DONOSO ECHEVERRIA' },
      { index: 3, firstName: 'WALTER', lastName: 'DONOSO BERNAL' }
    ]
  )

  const [index, setIndex] = useState(4)

  const handleRegister = () => {
    window.alert('Visitante registrado con exito.')
    setVisitors([
      ...visitors,
      { index, firstName: visitorFirstName, lastName: visitorLastName }]
    )

    setIndex((index) => index + 1)
  }

  const handleRemove = (index) => {
    setVisitors((prevVisitors) =>
      prevVisitors.filter((visitor) => visitor.index !== index)
    )
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
              <input className='form__input' type='text' id='name' name='name' placeholder='Nombre' onChange={(e) => setVisitorFirstName(e.target.value)} required />
            </div>
            {/* Apellidos */}
            <div className='form__group' style={{ marginTop: '24px' }}>
              <label className='form__label' htmlFor='lastName'>Apellidos</label>
              <input className='form__input' type='text' id='lastName' name='lastName' placeholder='Apellidos' onChange={(e) => setVisitorLastName(e.target.value)} required />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button
                style={{ marginTop: '24px', width: '100%' }}
                type='submit'
                className='button button__submit'
                onClick={() => handleRegister()}
              >Registrar
              </button>
            </div>
          </form>
        </div>

        {/* VISITANTES REGISTRADOS */}
        <div className='visitors'>
          <H2 className='visitors__subtitle'>Visitantes registrados:</H2>
          {visitors.map((visitor, index) => (
            <div key={index} className='visitor-item'>
              <div className='visitor-details'>
                <span className='visitor-initial'>
                  {visitor.firstName.charAt(0)}
                </span>
                <span className='visitor-name'>
                  {`${visitor.firstName} ${visitor.lastName}`}
                </span>
              </div>
              <button className='visitor-remove-button' onClick={() => handleRemove(visitor.index)}>
                X
              </button>
            </div>
          ))}
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
