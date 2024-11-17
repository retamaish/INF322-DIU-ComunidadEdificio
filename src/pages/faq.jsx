import React, { useState } from 'react'
import { H1, H2, P } from '@components'
import { useNavigate } from 'react-router-dom'
import DefaultBackground from '../assets/stockphotobuilding.jpg' // Agregar imagen

export const FAQ = () => {
  const navigate = useNavigate()

  const [msj, setmsj] = useState('')
  const handleChange = (e) => {
    setmsj(e.target.value)
  }
  const handleQuery = () => {
    window.alert(`Mensaje enviado al Administrador: ${msj}`)
  }

  return (
    <div className='faq'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: `url(${DefaultBackground})`, // Ruta de la imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        transition: 'background-image 0.5s ease',
      }}
    >
      <div
        className='faq__content'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semitransparente
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Sombra para resaltar el cuadro
          color:'black'
        }}
      >
        <H1 className='faq__title' style={{color:'black',}}>Preguntas frecuentes</H1>

        <H2 className='faq__subtitle'>¿Cómo realizar pago en la app?</H2>
        <P className='faq__answer'>Debe ir al inicio, donde encontrará un botón para pagar en caso de que tus cuentas no estén al día.</P>

        <H2 className='faq__subtitle'>¿Dónde está el quincho?</H2>
        <P className='faq__answer'>En el piso -1 de la torre 2 encontrará el quincho a mano derecha.</P>

        <form className='form'>
          <H2 className='faq__subtitle'>Horarios atención Administrador</H2>
          <P className='faq__answer'>Puede contactarse via email o en su oficina entre las 8:00 y las 18:00</P>

          <H2 className='faq__subtitle'>Ingrese su consulta</H2>
          <input
            style={{
              width: '80%',
              padding: '10px',
              marginBottom: '24px',
              boxSizing: 'border-box'
            }}
            placeholder='Problemas con luz, disponibilidad, etc.'
            value={msj}
            onChange={handleChange}
          />

          <div className='all-container' style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <button
              style={{ marginTop: '24px' }}
              type='submit'
              className='button button__submit'
              onClick={() => handleQuery()}
            >Enviar Consulta</button>
            <button
              style={{ marginTop: '24px' }}
              type='submit'
              className='button button__submit'
              onClick={() => navigate('/')}
            >Volver a inicio</button>
          </div>
        </form>
      </div>
    </div>
  )
}
