import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

export const MenuDropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigateMenu = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <div onClick={handleMenuClick} style={{ cursor: 'pointer', position: 'relative' }}>
      <MenuIcon />
      {menuOpen && (
        <ul
          className='menu-dropdown'
        >
          <li onClick={() => handleNavigateMenu('/usuario')} style={{ padding: '8px', cursor: 'pointer' }}>Tu perfil</li>
          <li onClick={() => handleNavigateMenu('/cartola')} style={{ padding: '8px', cursor: 'pointer' }}>Tu cartola</li>
          <li onClick={() => handleNavigateMenu('/inscribir-visitas')} style={{ padding: '8px', cursor: 'pointer' }}>Visitas</li>
          <li onClick={() => handleNavigateMenu('/')} style={{ padding: '8px', cursor: 'pointer', color: 'red' }}>Cerrar Sesion</li>
        </ul>
      )}
    </div>
  )
}
