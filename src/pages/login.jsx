import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { H1, H2, P, A } from '@components'

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email && password) {
      navigate('/home')
    } else {
      setError('Por favor, ingresa tus datos correctamente.')
    }
  }

  return (
    <div className='login'>
      <H1 className='login__title'>Bienvenido a Comunidad Edificio</H1>
      <H2 className='login__subtitle'>Ingresa tus datos</H2>

      {error && <P>{error}</P>}
      <form className='form' onSubmit={handleSubmit}>
        {/* Correo */}
        <div className='form__group'>
          <label className='form__label' htmlFor='email'>Correo electrónico</label>
          <input
            className='form__input'
            type='email'
            id='email'
            pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
            size='30'
            autoComplete={1}
            placeholder='johndoe@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Contraseña */}
        <div className='form__group' style={{ marginTop: '24px' }}>
          <label className='form__label' htmlFor='password'>Contraseña</label>
          <input
            className='form__input'
            type='password'
            id='password'
            name='password'
            placeholder='******'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Entrar</button>
      </form>
      <A href=''>Olvidaste tu contraseña?</A>
      <P>¿No tienes cuenta? <A href=''>Regístrate</A></P>
    </div>
  )
}
