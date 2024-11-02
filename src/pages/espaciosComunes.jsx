import React from 'react';
import { H1, H2, P, A } from '@components';

export const Solicitud = () => {
  return (
    <div className='solicitudEspacio-container' style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      
      {/*formulario ingreso seleccion quincho/gym */}
      <div className='Espacios'>
        <H1 className='espacio__title'>Solicita tu espacio:</H1>
        <form className='form'>
          <label><input style={{ marginTop: '24px' }} type='radio' name='opcion' value='opcion1' />¿Guardar como visitante frecuente?</label>
        </form>
      </div>

      {/**/}
      <div className='Horas-disponibles'>
        <H2 className='visita__subtitle'>Horas disponibles:</H2>

        <form className='form'>
          {/* Rut */}
          <div className='form__group'>
            <label className='form__label' htmlFor='rut2'>Rut</label>
            <input className='form__input' type='text' id='rut2' pattern='^\d{7,8}-[0-9kK]$' size='30' autoComplete="on" placeholder='12345678-9' required />
          </div>
          
          <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Entrar</button>
          <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Volver al inicio</button>
        </form>
        
      </div>
      
    </div>
  );
}
