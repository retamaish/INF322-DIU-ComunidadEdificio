import React from 'react'

export const H2 = ({ children, className, fontSize = '36px' }) => {
  return (
    <h2
      className={`h2 ${className || ''}`}
      style={{ fontSize }}
    >
      {children}
    </h2>
  )
}
