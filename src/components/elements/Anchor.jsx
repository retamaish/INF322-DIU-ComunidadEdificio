import React from 'react'

export const A = ({ children, className, href }) => {
  return (
    <a
      className={`${className}`}
      href={href}
    >
      {children}
    </a>
  )
}
