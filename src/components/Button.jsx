import React from 'react'
import '../theme/CSS/Button.css';

const Button = ({ children, className, label, description, type, onClick }) => {
  return (
    <button className={`button ${className || ''}`} type={type} aria-label={label} aria-describedby={description} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
