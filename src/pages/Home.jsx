import React, { useState } from 'react'
import { H1, P } from '@components'
import { useNavigate } from 'react-router-dom'
import { IconBell, IconUser, IconMenu } from '@icons'

export const Home = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const handlePay = () => {
    alert('Redirigiendo al portal de pago...')
  }
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigate = (path) => {
    navigate(path)
    setMenuOpen(false) // Cierra el menú al seleccionar una opción
  }

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
        <div className='home__header__icons' style={{ display: 'flex', gap: '1rem' }}>
          <div onClick={() => alert('Notificaciones')} style={{ cursor: 'pointer' }}>
            <IconBell />
          </div>
          <div onClick={() => navigate('/usuario')} style={{ cursor: 'pointer' }}>
            <IconUser />
          </div>
          <div onClick={handleMenuClick} style={{ cursor: 'pointer', position: 'relative' }}>
            <IconMenu />
            {menuOpen && (
              <ul className='menu-dropdown' style={{
                position: 'absolute', 
                top: '100%', 
                right: 0, 
                backgroundColor: 'grey', 
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                padding: '10px',
                width:'120px',
                listStyle: 'none',
                margin: 0
              }}>
                <li onClick={() => handleNavigate('/usuario')} style={{ padding: '8px', cursor: 'pointer'}}>Datos Usuario</li>
                <li onClick={() => handleNavigate('/cartola')} style={{ padding: '8px', cursor: 'pointer'}}>Cartola</li>
                <li onClick={() => handleNavigate('/inscribir-visitas')} style={{ padding: '8px', cursor: 'pointer'}}>Visitas</li>
                <li onClick={() => handleNavigate('/iniciar-sesion')} style={{ padding: '8px', cursor: 'pointer',color:'red'}}>Cerrar Sesion</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <hr />

      <div className='home__top'>
        <div>
          <H1 className='bold' style={{ margin: 0 }}>Gastos comunes</H1>
          <P style={{ marginTop: 12 }}>El monto total a pagar es de:</P>
          <P className='text-4xl bold' style={{ margin: 0 }}>$ 123.456</P>
          <P>+ $0 intereses</P>

          <div className='home__top__buttons'>
            <button className='button button__submit' style={{ width: '120px', marginRight: '10px' }} onClick={()=>handlePay()}>Pagar</button>
            <button className='button button__submit' style={{ width: '120px' }} onClick={() => navigate('/cartola')}>Ver detalle</button>
          </div>
        </div>

      </div>

      <hr />

      <div className='home__mid'>
        <H1 className='bold'>Reserva de espacio común</H1>
        <P>Revisa los espacios disponibles de tu condominio</P>
        <button className='button button__submit' onClick={() => navigate('reservar-espacios-comunes')} style={{ width: '120px' }}>Reservar</button>
      </div>

      <hr />

      <div className='home__bottom'>
        {/* Sección Izquierda */}
        <div className='home__bottom__visits'>
          <H1 className='bold'>Inscribe a tu visita</H1>
          <P>Registra a tu visita desde la comodidad de tu hogar</P>
          <button className='button button__submit' onClick={() => navigate('inscribir-visitas')} style={{ width: '140px' }}>Inscribir visita</button>
        </div>

        {/* Sección Derecha */}
        <div className='home__bottom__faq'>
          <H1 className='bold'>Consultas</H1>
          <P>¿Debes contactar a tu administración? Hazlo acá</P>
          <button className='button button__submit' onClick={() => navigate('preguntas-frecuentes')} style={{ width: '140px' }}>Contactar</button>
        </div>
      </div>
    </div>
  )
}
