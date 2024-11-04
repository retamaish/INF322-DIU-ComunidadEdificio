import React from 'react'

export const H1 = ({ children, className = '', style }) => {
  return (
    <h1
      className={`H1 ${className || ''}`}
      style={style}
    >
      {children}
    </h1>
  )
}
