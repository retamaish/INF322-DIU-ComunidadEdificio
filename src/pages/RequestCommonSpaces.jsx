import React, { useState } from 'react'
import { H1, H2 } from '@components'
import { useNavigate } from 'react-router-dom'
import ImageBarbecue from '../assets/barbecue.jpg'
import ImageGym from '../assets/gym.jpg'
import DefaultBackground from '../assets/stockphotobuilding.jpg'

export const RequestCommonSpaces = () => {
  const navigate = useNavigate()
  const [commonSpace, setCommonSpace] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [backgroundImage, setBackgroundImage] = useState(DefaultBackground)

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

    // Cambiar la imagen de fondo según el espacio seleccionado
    if (value === 'bbq') {
      setBackgroundImage(ImageBarbecue)
    } else if (value === 'gym') {
      setBackgroundImage(ImageGym)
    }
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
    <div
      className='request-space'
      style={{
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease',
        height: '100vh',
      }}
    >
      {/* Cuadro de contenido */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          color: '#333',
          maxWidth: '600px',
          width: '90%',
        }}
      >
        <H1>Solicita tu espacio:</H1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Espacio Quincho */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <label>
              <input type='radio' name='option' value='bbq' onChange={(e) => handleCommonSpaceClicked(e.target.value)} />
            </label>
            <div>
              <H2>Quincho</H2>
              <p>Espacio con parrilla y mesón</p>
            </div>
          </div>

          {/* Espacio Gimnasio */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <label>
              <input type='radio' name='option' value='gym' onChange={(e) => handleCommonSpaceClicked(e.target.value)} />
            </label>
            <div>
              <H2>Gimnasio</H2>
              <p>Sala con máquinas y pesas</p>
            </div>
          </div>

          {/* Fecha */}
          <div>
            <label htmlFor='date'>Selecciona una fecha:</label>
            <input
              type='date'
              id='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '8px' }}
            />
          </div>

          {/* Hora */}
          <div>
            <label htmlFor='hour'>Selecciona una hora:</label>
            <select
              id='hour'
              value={hour}
              disabled={!commonSpace || !date}
              onChange={(e) => setHour(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '8px' }}
            >
              {commonSpace && date
                ? hours.map((hour, index) => (
                  <option
                    key={index}
                    value={hour}
                    disabled={!getAvailableHours(commonSpace).includes(hour)}
                  >
                    {hour}
                  </option>
                ))
                : <option>Seleccione un espacio común y fecha</option>}
            </select>
          </div>

          {/* Botones */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <button className='button button__submit' onClick={handleSubmit} style={{ padding: '10px 20px' }}>Solicitar</button>
            <button className='button button__submit' onClick={() => navigate('/')} style={{ padding: '10px 20px' }}>Volver al inicio</button>
          </div>
        </div>
      </div>
    </div>
  )
}
