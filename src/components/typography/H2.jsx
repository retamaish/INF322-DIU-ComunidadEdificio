import React from 'react'

export const H2 = ({ children, className = '', style }) => {
  return (
    <h2
      className={`H2 ${className || ''}`}
      style={style}
    >
      {children}
    </h2>
  )
}
