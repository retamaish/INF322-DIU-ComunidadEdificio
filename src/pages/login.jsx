import React from 'react'
import { H1, H2, P, A } from '@components'

export const Login = () => {
  return (
    <div className='login'>
      <H1 className='login__title'>Bienvenido a Comunidad Edificio</H1>
      <H2 className='login__subtitle'>Ingresa tus datos</H2>

      <form className='form'>
        {/* Correo */}
        <div className='form__group'>
          <label className='form__label' htmlFor='email'>Correo electrónico</label>
          <input className='form__input' type='email' id='email' pattern='.+@example\.com' size='30' autoComplete={1} placeholder='johndoe@gmail.com' required />
        </div>

        {/* Contraseña */}
        <div className='form__group' style={{ marginTop: '24px' }}>
          <label className='form__label' htmlFor='password'>Contraseña</label>
          <input className='form__input' type='password' id='password' name='password' placeholder='******' required />
        </div>

        <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Entrar</button>
      </form>
      <A href=''>Olvidaste tu contraseña?</A>
      <P>¿No tienes cuenta? <A href=''>Regístrate</A></P>
    </div>
  )
}
