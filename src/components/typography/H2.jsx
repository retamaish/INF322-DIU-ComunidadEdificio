import React from 'react'

export const H2 = ({ children, className }) => {
  return (
    <h2
      className={`H2 ${className || ''}`}
    >
      {children}
    </h2>
  )
}
