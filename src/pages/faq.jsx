import React from 'react'
import { H1, H2, P } from '@components'

export const FAQ = () => {
  // Frequently Asked Questions (FAQ)
  return (
    <div className='faq'>
      <H1 className='faq__title'>Preguntas frecuentes</H1>

      <H2 className='faq__subtitle'>¿Cómo realizar pago en la app?</H2>
      <P className='faq__answer'> Debe ir al inicio, donde encontrará un botón para pagar en caso de que tus cuentas no estén al día. </P>

      <H2 className='faq__subtitle'>¿Dónde esta el quincho?</H2>
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
