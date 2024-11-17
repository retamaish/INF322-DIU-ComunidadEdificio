import React, { useState } from 'react'
import { H1, H2, P } from '@components'
import { useNavigate } from 'react-router-dom'

export const PayMethods = () => {
  const navigate = useNavigate()

  const [selectedMethod, setSelectedMethod] = useState('')

  const handlePaymentSubmit = () => {
    if (selectedMethod) {
      window.alert(`Has seleccionado el método de pago: ${selectedMethod}`)
    } else {
      window.alert('Por favor, selecciona un método de pago')
    }
  }

  return (
    <div
      className='pay-methods'
      style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',height: '100vh',}}
    >
      {/* Cuadro de contenido */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          color: '#333',
          width: '90%',
          maxWidth: '600px',
        }}
      >
        <H1 className='pay-methods__title'>Métodos de Pago</H1>

        <H2 className='pay-methods__subtitle'>Selecciona un método de pago:</H2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          <label>
            <input
              type='radio'
              name='paymentMethod'
              value='Tarjeta de Crédito'
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            Tarjeta de Débito / Crédito
          </label>

          <label>
            <input
              type='radio'
              name='paymentMethod'
              value='Transferencia Bancaria'
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            Transferencia Bancaria
          </label>
        </div>

        <div className='all-container' style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <button
            className='button button__submit'
            style={{ padding: '10px 20px' }}
            onClick={handlePaymentSubmit}
          >
            Confirmar Pago
          </button>
          <button
            className='button button__submit'
            style={{ padding: '10px 20px' }}
            onClick={() => navigate('/')}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  )
}
