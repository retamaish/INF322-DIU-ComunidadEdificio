import React from 'react'

export const A = ({ children, className = '', href, color = '#FFF2D3' }) => {
  return (
    <a
      className={`anchor ${className || ''}`}
      href={href}
      style={{ color }}
    >
      {children}
    </a>
  )
}
