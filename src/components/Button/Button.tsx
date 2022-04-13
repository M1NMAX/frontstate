import React from 'react'


const sizes = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14'
}

type ButtonVariants = 'filled' | 'outline' | 'light'

function getVariantStyle({
  variant,
  color
}: {
  variant: ButtonVariants
  color: string
}) {
  if (variant === 'filled')
    return `bg-${color}-500 text-white hover:bg-${color}-600 `
  if (variant === 'outline')
    return `bg-transparent text-${color}-500 border border-${color}-400 hover:bg-${color}-500/75`
  if (variant === 'light') {
    return `bg-${color}-200 text-${color}-500`
  }
  return ''
}

const getWidthStyle = (fullWidth: boolean) =>
  fullWidth ? 'w-full block' : 'w-auto inline-block'

const getSizeStyle = (size: string) => sizes[size]

export default function Button(props: IButton) {
  const {
    children,
    variant = 'filled',
    color = 'green',
    size = 'sm',
    fullWidth = false,
    compact = false,
    uppercase = false,
    rounded = false,
    block = false,
    disabled = false,
    onClick = () => {},
    type = 'button'
  } = props

  const classname = `${getVariantStyle({ variant, color })}
  ${getSizeStyle(size)}
  ${getWidthStyle(fullWidth)}
  ${uppercase && 'uppercase'}
  ${compact ? 'px-1' : 'py-1 px-2'}
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
  variant?: ButtonVariants
  color?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  uppercase?: boolean
  compact?: boolean
  rounded?: boolean
  block?: boolean
  disabled?: boolean
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
}
