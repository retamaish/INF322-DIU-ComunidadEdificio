import React from 'react'
import { H1, H2 } from '@components'
import ImageBarbecue from '../assets/barbecue.jpg'
import ImageGym from '../assets/gym.jpg'

export const RequestCommonSpaces = () => {
  const hours = Array.from({ length: 15 }, (_, i) => { // 15 horas desde 8 hasta 22
    const hour = (i + 8).toString().padStart(2, '0') // Sumar 8 para iniciar desde las 8 AM
    return `${hour}:00`
  })
  return (
    <div className='request-space' style={{ displayjustifyContent: 'center' }}>
      <H1>Solicita tu espacio:</H1>

      {/* Formulario de selección */}
      <div className='request-space__form-container' style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <div className='request-space__options'>

          {/* Espacio Quincho */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <img src={ImageBarbecue} style={{ width: '100px', height: 'auto' }} />
            <label style={{ marginLeft: '8px' }}>
              <input type='radio' name='opcion' value='quincho' />
            </label>
            <div className='request-space__details'>
              <H2 className='request-space__subtitle'>Quincho</H2>
              <p className='request-space__description'>Espacio con parrilla y mesón</p>
            </div>
          </div>

          {/* Espacio Gimnasio */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src={ImageGym} style={{ width: '100px', height: 'auto' }} />
            <label style={{ marginLeft: '8px' }}>
              <input type='radio' name='opcion' value='gimnasio' />
            </label>
            <div className='request-space__details'>
              <H2 className='request-space__subtitle'>Gimnasio</H2>
              <p className='request-space__description'>Sala con máquinas y pesas</p>
            </div>

          </div>
        </div>

        {/* seleccion hora */}
        <div className='request-space__time-selection' style={{ marginTop: '24px' }}>
          {/* Lista desplegable de horas */}
          <form className='form'>
            <div className='form__group'>
              <label className='form__label' htmlFor='hour'>Selecciona una hora:</label>
              <select id='hour' name='hour' className='form__input' style={{ padding: '8px', width: '100%', marginTop: '8px' }}>
                {hours.map((hour, index) => (
                  <option key={index} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>

            {/* Botones */}
            <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Solicitar</button>
            <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Volver al inicio</button>
          </form>
        </div>
      </div>
    </div>
  )
}
