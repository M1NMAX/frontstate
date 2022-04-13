import React from 'react'

type AlertVariant = 'filled' | 'outline' | 'light'

interface IAlert {
  children: React.ReactNode
  title?: string
  variant?: AlertVariant
  color?: string
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  withCloseBtn?: boolean
  icon?: React.ReactNode
}

const radius = {
  xs: 'rounded-sm',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-full'
}

function getVariantStyle({
  variant,
  color
}: {
  variant: AlertVariant
  color: string
}) {
  if (variant === 'outline')
    return `bg-transparent text-${color}-500 border border-${color}-400`
  if (variant === 'light') {
    return `bg-${color}-100 text-${color}-500`
  }
  // filled is the default variant
  return `bg-${color}-500 text-white hover:bg-${color}-600 `
}

export default function Alert(props: IAlert) {
  const {
    children,
    title = '',
    variant = 'filled',
    color = 'green',
    rounded = 'sm',
    withCloseBtn = false,
    icon = ''
  } = props

  return (
    <div
      className={`
      ${getVariantStyle({ variant, color })}
      ${radius[rounded]}
      w-full p-2 `}
    >
      <div className='flex items-start justify-between'>
        <span className='px-2'>{icon}</span>
        <div className=' w-full'>
          <p className='font-bold text-lg'>{title}</p>
          {children}
        </div>
        <button className={`${withCloseBtn ? 'block' : 'hidden'}`}>
          &times;
        </button>
      </div>
    </div>
  )
}
