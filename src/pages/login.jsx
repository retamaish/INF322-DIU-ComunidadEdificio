import React from 'react'
import { H1, H2, P } from '@components'

export const Login = () => {
  return (
    <div className='login'>
      <H1 className='login__title'>Bienvenido a Comunidad Edificio</H1>
      <H2 className='login__subtitle'>Ingresa tus datos</H2>

      <form className='form'>
        {/* Correo */}
        <div className='form__group'>
          <label className='form__label' for='email'>Correo electrónico</label>
          <input className='form__input' type='email' id='email' pattern='.+@example\.com' size='30' autoComplete={1} placeholder='johndoe@gmail.com' required />
        </div>

        {/* Contraseña */}
        <div className='form__group' style={{ marginTop: '36px' }}>
          <label className='form__label' for='password'>Contraseña</label>
          <input className='form__input' type='password' id='password' name='password' placeholder='******' required />
        </div>

        <button style={{ marginTop: '22px' }} type='submit' className='button button__submit'>Entrar</button>
      </form>
      <a>Olvidaste tu contraseña?</a>
      <P>¿No tienes cuenta? <a>Regístrate</a></P>
    </div>
  )
}
