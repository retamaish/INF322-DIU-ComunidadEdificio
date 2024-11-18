import React from 'react'
import { useNavigate } from 'react-router-dom'
import { H1, P } from '@typography'

export const HomeGoToFAQ = () => {
  const navigate = useNavigate()

  return (
    <div className='home__bottom__faq' style={{ width: '48%' }}>
      <H1 className='bold'>Consultas</H1>
      <P>¿Debes contactar a tu administración? Hazlo acá</P>
      <button className='button button__submit' onClick={() => navigate('preguntas-frecuentes')} style={{ width: '140px' }}>Contactar</button>
    </div>
  )
}
