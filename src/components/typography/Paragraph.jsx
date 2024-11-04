import React from 'react'

export const P = ({ children, className = '', fontSize = '24px' }) => {
  return (
    <p
      className={`${className || ''}`}
      style={{ fontSize }}
    >
      {children}
    </p>
  )
}
