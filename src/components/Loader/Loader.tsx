import React from 'react'
type loaderVariant = 'dots' | 'square'

interface ILoader {
  variant?: loaderVariant
  color?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  xs: 'h-1 w-1',
  sm: 'h-2 w-2',
  md: 'h-3 w-3',
  lg: 'h-4 w-4',
  xl: 'h-6 w-6'
}

const spaces = {
  xs: 'space-x-2',
  sm: 'space-x-3',
  md: 'space-x-4',
  lg: 'space-x-5',
  xl: 'space-x-6'
}

const getVariantStyle = (variant: loaderVariant, key: number) => {
  if (variant === 'square') return 'animate-ping'
  return `${
    key % 2 == 0 ? 'animate-bounce-slow' : 'animate-bounce'
  } rounded-full`
}

export default function Loader(props: ILoader) {
  const { variant = 'dots', color = 'green', size = 'lg' } = props
  return (
    <div className={`flex ${spaces[size]}`}>
      {[1, 2, 3].map((idx) => (
        <span
          key={idx}
          className={`
          ${sizes[size]}
          bg-${color}-400 ${getVariantStyle(variant, idx)}
          `}
        ></span>
      ))}
    </div>
  )
}
