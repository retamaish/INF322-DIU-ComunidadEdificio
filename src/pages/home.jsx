import React from 'react'
import { H1, P } from '@components'
import { IconBell, IconUser, IconMenu } from '@icons'

export const Home = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__header__address'>
          <P style={{ marginTop: 10, marginBottom: 10 }}>
            Departamento 1234 Torre A
            <br />
            Comunidad Santa María
          </P>
        </div>
        <div className='home__header__icons'>
          <IconBell />
          <IconUser />
          <IconMenu />
        </div>
      </div>

      <hr />

      <div className='home__top'>
        <H1 className='bold' style={{ margin: 0 }}>Gastos comunes</H1>
        <P style={{ marginTop: 12 }}>El monto total a pagar es de:</P>
        <P className='text-5xl bold' style={{ margin: 0 }}>$ 123.456</P>
        <P>+ $0 intereses</P>

        <div className='home__top__buttons'>
          <button className='button button__submit' style={{ width: '120px', marginRight: '10px' }}>Pagar</button>
          <button className='button button__submit' style={{ width: '120px' }}>Ver detalle</button>
        </div>
      </div>

      <hr />

      <div className='home__mid'>
        <H1 className='bold'>Reserva de espacio común</H1>
        <P>Revisa los espacios disponibles de tu condominio</P>
        <button className='button button__submit' style={{ width: '120px' }}>Reservar</button>
      </div>

      <hr />

      <div className='home__bottom'>
        {/* Sección Izquierda */}
        <div className='home__bottom__visits'>
          <H1 className='bold'>Inscribe a tu visita</H1>
          <P>Registra a tu visita desde la comodidad de tu hogar</P>
          <button className='button button__submit' style={{ width: '140px' }}>Inscribir visita</button>
        </div>

        {/* Sección Derecha */}
        <div className='home__bottom__faq'>
          <H1 className='bold'>Consultas</H1>
          <P>¿Debes contactar a tu administración? Hazlo acá</P>
          <button className='button button__submit' style={{ width: '140px' }}>Contactar</button>
        </div>
      </div>
    </div>
  )
}
