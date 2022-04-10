import React from 'react'

interface IVariants {
  filled: string
  outline: string
  light: string
}

const variants: IVariants = {
  filled: 'bg-green-500 text-white hover:bg-green-600',
  outline:
    'bg-transparent text-green-500 border border-green-400 hover:bg-green-500/75',
  light: 'bg-green-200 text-green-500'
}

export default function Button(props: IButton) {
  const {
    children,
    variant = 'filled',
    compact = false,
    uppercase = false,
    rounded = false,
    block = false,
    disabled = false,
    onClick = () => {},
    type = 'button'
  } = props

  const classname = `${variants[variant]}
  ${uppercase && 'uppercase'}
  ${compact? 'px-1': 'py-1 px-2'}
  ${rounded ? 'rounded-full' : 'rounded'}
  ${block ? 'block w-full ' : ''}`

  return (
    <button
      type={type}
      className={classname}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface IButton {
  children: React.ReactNode
  variant?: 'filled' | 'outline' | 'light'
  uppercase?: boolean
  compact?: boolean
  rounded?: boolean
  block?: boolean
  disabled?: boolean
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
}
