import React from 'react'
import { H1, H2, P } from '@components'

export const AdminSubmit = () => {
  return (
    <div className='login'>
      <H1 className='login__title'>Preguntas frecuentes</H1>
      <H2 className='question1'>¿Cómo realizar pago en la app?</H2>
      <P className='answer1'> Debe ir al inicio, donde encontrará un botón para pagar en caso de que tus cuentas no estén al día. </P>

      <H2 className='question2'>¿Dónde esta el quincho?</H2>
      <P className='answer2'>En el piso -1 de la torre 2 encontrará el quincho a mano derecha.</P>
      <form className='form'>
        <H2 className='question3'>Horarios atención Administrador</H2>
        <P className='answer3'>Puede contactarse via email o en su oficina entre las 8:00 y las 18:00</P>
        <H2 className='queryAdmin'>Ingrese su consulta</H2>
        <input
          style={{
            width: '80%',
            padding: '10px',
            marginBottom: '24px',
            boxSizing: 'border-box'
          }}
          placeholder='Problemas con luz, disponibilidad,etc.'
        />
        <div className='all-containter' style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Enviar Consulta.</button>
          <button style={{ marginTop: '24px' }} type='submit' className='button button__submit'>Volver a inicio.</button>
        </div>
      </form>
    </div>
  )
}
