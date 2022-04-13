import React from 'react'

const radius = {
  xs: 'rounded-sm',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-full'
}

const sizes = {
  xs: 'h-2',
  sm: 'h-3',
  md: 'h-4',
  lg: 'h-5',
  xl: 'h-6'
}

const getColorStyle = (color: string) => `bg-${color}-500`

export default function Slider(props: ISlider) {
  const {
    rounded = 'sm',
    size = 'sm',
    color = 'green',
    required = false,
    disabled = false,
    placeholder = '',
    description = '',
    label = '',
    min = '',
    max = '',
    value = '',
    onChange = () => {}
  } = props

  return (
    <label className='block'>
      <span className='block text-sm '>
        {label} {required && '*'}
      </span>
      <p className='text-xs text-gray-600'>{description}</p>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          ${getColorStyle(color)}
          ${radius[rounded]}
          ${sizes[size]}
          ${disabled && 'cursor-not-allowed'}
          appearance-none  outline-none
          opacity-7 hover:opacity-100
          transition-opacity duration-150  `}
      />
    </label>
  )
}

interface ISlider {
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
  description?: string
  label?: string
  min?: string
  max?: string
  value?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}
