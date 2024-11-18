import React from 'react'
import { H1, P } from '@typography'
import { useNavigate } from 'react-router-dom'

export const HomeGoToCommonSpaces = () => {
  const navigate = useNavigate()
  return (
    <div className='home__mid' style={{ width: '100%' }}>
      <H1 className='bold'>Reserva de espacio común</H1>
      <P>Revisa los espacios disponibles de tu condominio</P>
      <button className='button button__submit' onClick={() => navigate('reservar-espacios-comunes')} style={{ width: '120px' }}>Reservar</button>
    </div>

  )
}
