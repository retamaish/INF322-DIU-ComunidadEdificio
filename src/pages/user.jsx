import React from 'react';
import { H1, H2, P, A } from '@components';
import userIMG from './img/user_default.jpg';

export const UserData = () => {
  return (
    <div className='solicitudEspacio-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
      <H1>Datos del Usuario:</H1>
      <div className='all-container' style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
        <div className='espacios-container'>
          {/* Foto del usuario */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <img src={userIMG} alt='Usuario' style={{ width: '100px', height: 'auto' }} />
          </div>
        </div>

        {/* Datos del usuario */}
        <div className='datos-user'>
          <form className='form'>
            <div className='form__group' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} >
              {/* Contenedor para cada par de nombre y dato */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <h3 className='dataName1'>Nombre:</h3>
                <P className='data1'>Armando Casas</P>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <h3 className='dataName2'>Departamento:</h3>
                <P className='data2'>Departamento 1234 - Torre A, Condominio Santa María</P>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <h3 className='dataName3'>Estado de Cuenta:</h3>
                <P className='data3'>Pagado</P>
              </div>
            </div>

            <div className='button-container' style={{ display: 'flex', gap: '2rem', marginTop: '24px', justifyContent: 'center' }}>
              <button type='submit' className='button button__submit'>Solicitar</button>
              <button type='button' className='button button__submit'>Volver al inicio</button>
            </div>
          </form>
        </div>
      </div>      
    </div>
  );
};
