import React from 'react'
import { H2 } from '@components'

export const Visita = () => {
  return (
    <div className='visitas_containerAll'>
      <h1 style={{ justifyContent: 'center' }}>Inscribe tu Visita</h1>
      <div className='visitas-container' style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        {/* formulario ingreso nuevo visitante */}
        <div className='visita'>
          <H2 className='visita__subtitle'>Agendar Visitante</H2>
          <form className='form'>
            {/* Rut */}
            <div className='form__group'>
              <label className='form__label' htmlFor='rut'>Rut</label>
              <input className='form__input' type='text' id='rut' pattern='^\d{7,8}-[0-9kK]$' size='30' autoComplete='on' placeholder='12345678-9' required />
            </div>
            {/* Nombre */}
            <div className='form__group' style={{ marginTop: '24px' }}>
              <label className='form__label' htmlFor='nombre'>Nombre</label>
              <input className='form__input' type='text' id='nombre' name='nombre' placeholder='Nombre' required />
            </div>
            {/* Apellidos */}
            <div className='form__group' style={{ marginTop: '24px' }}>
              <label className='form__label' htmlFor='apellidos'>Apellidos</label>
              <input className='form__input' type='text' id='apellidos' name='apellidos' placeholder='Apellidos' required />
            </div>
            <label><input style={{ marginTop: '24px' }} type='radio' name='opcion' value='opcion1' />¿Guardar como visitante frecuente?</label>
            <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Entrar</button>
          </form>
        </div>

        {/* VISITANTES REGISTRADOS */}
        <div className='visita'>
          <H2 className='visita__subtitle'>Visitantes registrados:</H2>
          <form className='form'>
            <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Volver al inicio</button>
          </form>
        </div>
      </div>
    </div>
  )
}
