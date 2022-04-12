import React from 'react'

interface IScale {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

const radius: IScale = {
  xs: 'rounded-sm',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-full'
}

const sizes: IScale = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
  xl: 'h-14'
}

export default function TextInput(props: ITextInput) {
  const {
    rounded = 'sm',
    size = 'sm',
    required = false,
    disabled = false,
    placeholder = '',
    description = '',
    label = '',
    value = '',
    onChange = () => {}
  } = props

  const inputClassname = `
  ${radius[rounded]}
  ${sizes[size]}
  ${disabled && 'cursor-not-allowed'}
  px-2.5 border-0`

  return (
    <label className='block'>
      <span className='block text-sm'>
        {label} {required && '*'}
      </span>
      <p className='text-xs text-gray-600'>{description}</p>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputClassname}
      />
    </label>
  )
}

interface ITextInput {
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  required?: boolean
  disabled?: boolean
  placeholder?: string
  description?: string
  label?: string
  value?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}
