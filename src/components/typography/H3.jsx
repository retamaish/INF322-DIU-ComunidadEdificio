import React from 'react'

export const H3 = ({ children, className = '', style }) => {
  return (
    <h3
      className={`H3 ${className || ''}`}
      style={style}
    >
      {children}
    </h3>
  )
}
