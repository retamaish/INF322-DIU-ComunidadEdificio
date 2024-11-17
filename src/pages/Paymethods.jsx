import React, { useState } from 'react'
import { H1, H2 } from '@components'
import { useNavigate } from 'react-router-dom'
import DefaultBackground from '../assets/stockphotobuilding.jpg'

export const PayMethods = () => {
  const navigate = useNavigate()

  const [selectedMethod, setSelectedMethod] = useState('')
  const [accountHolder, setAccountHolder] = useState('')
  const [rutHolder, setRutHolder] = useState('')
  const [bankAccount, setBankAccount] = useState('')
  const [selectedBank, setSelectedBank] = useState('')

  const handlePaymentSubmit = () => {
    if (selectedMethod && accountHolder && bankAccount && rutHolder && selectedBank) {
      window.alert(`Has seleccionado el método de pago: ${selectedMethod} \nTitular: ${accountHolder} \nCuenta: ${bankAccount}`)
    } else {
      window.alert('Por favor, completa todos los campos')
    }
  }

  const availableBanks = ['BancoEstado', 'Banco Credito e Inversiones', 'Banco Santander', 'SantaMariaBANK']

  return (
    <div
      className='pay-methods'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        position: 'relative',
        backgroundImage: `url(${DefaultBackground})`, // Ruta de la imagen de fondo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        transition: 'background-image 0.5s ease'
      }}
    >
      <div
        className='pay-methods__content'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        <H1 className='pay-methods__title'>Métodos de Pago</H1>

        <div className='pay-methods__container' style={{ display: 'flex', gap: '2rem', width: '100%' }}>
          {/* Elección de método de pago */}
          <div
            className='payment-selection' style={{
              flex: 1,
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <H2 className='pay-methods__subtitle'>Selecciona un método de pago:</H2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
          </div>

          {/* Formulario de datos bancarios */}
          <div
            className='bank-details' style={{
              flex: 1,
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            <H2 className='pay-methods__subtitle'>Ingrese los datos bancarios:</H2>
            <div className='form'>
              {/* Titular de cuenta */}
              <div className='form__group'>
                <label className='form__label' htmlFor='accountHolder'>Titular de la cuenta</label>
                <input
                  className='form__input'
                  type='text'
                  id='accountHolder'
                  value={accountHolder}
                  onChange={(e) => setAccountHolder(e.target.value)}
                  placeholder='Nombre del titular'
                  required
                />
              </div>

              {/* Rut de cuenta */}
              <div className='form__group' style={{ marginTop: '24px' }}>
                <label className='form__label' htmlFor='rutHolder'>Rut del titular</label>
                <input
                  className='form__input'
                  type='text'
                  id='rutHolder'
                  value={rutHolder}
                  onChange={(e) => setRutHolder(e.target.value)}
                  placeholder='12345678-9'
                  required
                />
              </div>

              {/* Selección de banco */}
              <div className='form__group' style={{ marginTop: '24px' }}>
                <label className='form__label' htmlFor='selectedBank'>Selecciona un banco</label>
                <select
                  id='selectedBank'
                  className='form__input'
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  required
                >
                  <option value=''>Seleccione un banco</option>
                  {availableBanks.map((bank, index) => (
                    <option key={index} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cuenta bancaria */}
              <div className='form__group' style={{ marginTop: '24px' }}>
                <label className='form__label' htmlFor='bankAccount'>Número de cuenta</label>
                <input
                  className='form__input'
                  type='text'
                  id='bankAccount'
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                  placeholder='Cuenta bancaria'
                  required
                />
              </div>

              {/* Botón de confirmación */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button
                  style={{ marginTop: '24px', width: '100%' }}
                  type='submit'
                  className='button button__submit'
                  onClick={handlePaymentSubmit}
                >
                  Confirmar Pago
                </button>
                <button
                  className='button button__submit'
                  style={{ marginTop: '24px', width: '100%' }}
                  onClick={() => navigate('/')}
                >
                  Volver al inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para pantallas pequeñas */}
      <style>
        {`
                    @media (max-width: 768px) {
                        .pay-methods__container {
                            flex-direction: column; /* Cambia la dirección de los elementos a columna en pantallas pequeñas */
                        }
                        .payment-selection,
                        .bank-details {
                            flex: none; /* Evita que los elementos ocupen todo el espacio */
                            width: 90%; /* Hace que cada elemento ocupe todo el ancho disponible */
                            margin-bottom: 20px; /* Espaciado entre los cuadros */
                        }
                    }
                `}
      </style>
    </div>
  )
}
