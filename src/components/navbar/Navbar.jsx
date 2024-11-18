import React from 'react'
import { MenuDropdown, A } from '@components'
import { H1, P } from '@typography'
import { useNavigate } from 'react-router-dom'

import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='home__header' style={{ width: '100%' }}>
      <H1 className='home__header__title'>ComunidadEdificio</H1>
      <div className='home__header__address'>
        <P style={{ marginTop: 2, marginBottom: 0 }}>
          Departamento 1234 Torre A
          <br />
          Comunidad Santa María
        </P>
      </div>
      <div className='home__header__icons' style={{ display: 'flex', gap: '1rem' }}>
        <P>¿Deseas contactar con tu administración? Hazlo <A href='preguntas-frecuentes'>acá</A></P>
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <HomeIcon fontSize='medium' />
        </div>
        <div onClick={() => window.alert('Notificaciones')} style={{ cursor: 'pointer' }}>
          <NotificationsIcon fontSize='medium' />
        </div>
        <div onClick={() => navigate('/usuario')} style={{ cursor: 'pointer' }}>
          <AccountCircleIcon fontSize='medium' />
        </div>
        <MenuDropdown />
      </div>
    </div>
  )
}
