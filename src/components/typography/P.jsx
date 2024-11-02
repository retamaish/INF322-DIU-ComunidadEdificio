import React from 'react'

export const P = ({ children, className }) => {
  return (
    <p className={`paragraph ${className}`}>{children}</p>
  )
}
