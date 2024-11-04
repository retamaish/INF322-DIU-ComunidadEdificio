import React from 'react'

export const H1 = ({ children, className }) => {
  return (
    <h1
      className={`H1 ${className || ''}`}
    >
      {children}
    </h1>
  )
}
