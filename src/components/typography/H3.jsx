import React from 'react'

export const H3 = ({ children, className }) => {
  return (
    <h3
      className={`H3 ${className || ''}`}
    >
      {children}
    </h3>
  )
}
