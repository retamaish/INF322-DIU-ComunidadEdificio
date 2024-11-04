import React from 'react'

export const H1 = ({ children, className, fontSize = '48px' }) => {
  return (
    <h1
      className={`${className || ''}`}
      style={{ fontSize }}
    >
      {children}
    </h1>
  )
}
