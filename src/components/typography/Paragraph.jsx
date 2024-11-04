import React from 'react'

export const P = ({ children, className = '', style }) => {
  return (
    <p
      className={`P ${className || ''}`}
      style={style}
    >
      {children}
    </p>
  )
}
