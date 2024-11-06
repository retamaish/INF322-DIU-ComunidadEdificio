import React, { useState } from 'react'
import { H1, H2 } from '@components'
import { useNavigate } from 'react-router-dom'
import ImageBarbecue from '../assets/barbecue.jpg'
import ImageGym from '../assets/gym.jpg'

export const RequestCommonSpaces = () => {
  const navigate = useNavigate()
  const [commonSpace, setCommonSpace] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')

  const hours = Array.from({ length: 15 }, (_, i) => {
    const first = (i + 8).toString().padStart(2, '0')
    const end = (i + 10).toString().padStart(2, '0')
    return `${first}:00-${end}:00`
  })

  const availableHoursBBQ = ['08:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00', '18:00-20:00']
  const availableHoursGym = ['14:00-16:00', '18:00-20:00']

  const getAvailableHours = (commonSpace) => {
    if (commonSpace === 'bbq') return availableHoursBBQ
    else if (commonSpace === 'gym') return availableHoursGym
    return ['Seleccione un espacio común']
  }

  const handleCommonSpaceClicked = (value) => {
    setCommonSpace(value)
    const availableHours = getAvailableHours(value)
    setHour(availableHours.length > 0 ? availableHours[0] : '')
  }

  const handleSubmit = () => {
    if (date && hour) {
      let prompt = ''
      if (commonSpace === 'bbq') {
        prompt = 'Se ha reservado el quincho'
      } else if (commonSpace === 'gym') {
        prompt = 'Se ha reservado el gimnasio'
      } else { prompt = 'El espacio común seleccionado no es válido.' }

      window.alert(`Espacio reservado con éxito: ${prompt} el día ${date} de ${hour.slice(0, 5)} a ${hour.slice(6, 11)}`)
    } else {
      window.alert('Por favor, selecciona una fecha y una hora')
    }
  }

  return (
    <div className='request-space' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <H1>Solicita tu espacio:</H1>
      <div className='request-space__form-container' style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <div className='request-space__options'>

          {/* Espacio Quincho */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <img src={ImageBarbecue} style={{ width: '100px', height: 'auto' }} />
            <label style={{ marginLeft: '8px' }}>
              <input type='radio' name='option' value='bbq' onChange={(e) => handleCommonSpaceClicked(e.target.value)} />
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
              <input type='radio' name='option' value='gym' onChange={(e) => handleCommonSpaceClicked(e.target.value)} />
            </label>
            <div className='request-space__details'>
              <H2 className='request-space__subtitle'>Gimnasio</H2>
              <p className='request-space__description'>Sala con máquinas y pesas</p>
            </div>
          </div>
        </div>

        {/* Selección de Fecha y Hora */}
        <div className='request-space__time-selection' style={{ marginTop: '24px' }}>
          <form className='form' onSubmit={(e) => e.preventDefault()}>

            {/* Selección de Fecha */}
            <div className='form__group'>
              <label className='form__label' htmlFor='date'>Selecciona una fecha:</label>
              <input
                type='date'
                id='date'
                name='date'
                className='form__input'
                style={{ padding: '8px', width: '100%', marginTop: '8px' }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Selección de Hora */}
            <div className='form__group' style={{ marginTop: '16px' }}>
              <label className='form__label' htmlFor='hour'>Selecciona una hora:</label>
              <select
                id='hour'
                name='hour'
                className='form__input'
                style={{ padding: '8px', width: '100%', marginTop: '8px' }}
                value={hour}
                disabled={!commonSpace || !date}
                onChange={(e) => setHour(e.target.value)}
              >
                {commonSpace && date
                  ? hours.map((hour, index) => (
                    <option
                      key={index}
                      value={hour}
                      disabled={!getAvailableHours(commonSpace).includes(hour)}
                      style={{ color: getAvailableHours(commonSpace).includes(hour) ? 'black' : 'gray' }}
                    >
                      {hour}
                    </option>
                  ))
                  : <option>Selecciona un espacio común y fecha</option>}
              </select>
            </div>

            {/* Botones */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '24px' }}>
              <button
                type='submit'
                className='button button__submit'
                onClick={() => handleSubmit()}
              >
                Solicitar
              </button>

              <button
                type='button'
                className='button button__submit'
                onClick={() => navigate('/')}
              >
                Volver al inicio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
