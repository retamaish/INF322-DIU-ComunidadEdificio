import React from 'react'
import { H1, P } from '@typography'
import { useNavigate } from 'react-router-dom'

export const HomeGoToVisits = () => {
  const navigate = useNavigate()

  return (
    <div className='home__bottom__visits'>
      <H1 className='bold'>Inscribe a tu visita</H1>
      <P>Registra a tu visita desde la comodidad de tu hogar</P>
      <button className='button button__submit' onClick={() => navigate('inscribir-visitas')} style={{ width: '140px' }}>Inscribir visita</button>
    </div>
  )
}
