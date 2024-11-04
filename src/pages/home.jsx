import React from 'react'
import { H1, P } from '@components'
import { IconBell, IconUser, IconMenu } from '@icons'

export const Home = () => {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__header__address'>
          <P>
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

      <div>
        <H1 className='bold'>Gastos comunes</H1>
        <P>El monto total a pagar es de:</P>
      </div>
    </div>
  )
}
