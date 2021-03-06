import React from 'react'
import { SpinnerRing } from 'spinner-ym'
import './button.css'

const Button = (props) => {
  const { label, disabledLabel, disabled, primary, children, ...rest } = props
  const className = primary ? 'btn btn-primary' : 'btn'
  const labelButton = disabled ? disabledLabel : label
  return (
    <button type='button' className={className} {...rest}>
      {labelButton}
      {children}
      {disabled && <SpinnerRing />}
    </button>
  )
}

export default Button
