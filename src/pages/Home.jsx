import React from 'react'
import { H1, P, MenuDropdown } from '@components'
import { useNavigate } from 'react-router-dom'
import { IconBell, IconUser } from '@icons'

export const Home = () => {
  const navigate = useNavigate()

  const handlePay = () => {
    window.alert('Redirigiendo al portal de pago...')
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
          <div onClick={() => window.alert('Notificaciones')} style={{ cursor: 'pointer' }}>
            <IconBell />
          </div>
          <div onClick={() => navigate('/usuario')} style={{ cursor: 'pointer' }}>
            <IconUser />
          </div>
          <MenuDropdown />
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
            <button className='button button__submit' style={{ width: '120px', marginRight: '10px' }} onClick={() =>navigate('/metodos-pago')}>Pagar</button>
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
