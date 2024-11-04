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
        <H1 className='bold'>Gastos comunes</H1>
        <P>El monto total a pagar es de:</P>
        <P className='text-5xl bold' style={{ margin: 0 }}>$ 123.456</P>
        <P>+$0 intereses</P>
      </div>

      <hr />

      <div className='home__mid'>
        <H1 className='bold'>Reserva de espacio común</H1>
        <P>Revisa los espacios disponibles de tu condominio</P>
      </div>

      <hr />

      <div className='home__bottom'>
        {/* Sección Izquierda */}
        <div className='home__bottom__visits'>
          <H1 className='bold'>Inscribe a tu visita</H1>
          <P>Registra a tu visita desde la comodidad de tu hogar</P>
        </div>

        {/* Sección Derecha */}
        <div className='home__bottom__faq'>
          <H1 className='bold'>Consultas</H1>
          <P>¿Debes contactar a tu administración? Hazlo acá</P>
        </div>
      </div>
    </div>
  )
}
