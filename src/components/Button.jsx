import React from 'react'

const Button = ({ children, className, label, description }) => {
  return (
    <button className={`button ${className || ''}`} aria-label={label} aria-describedby={description}>
      {children}
    </button>
  )
}

export default Button
