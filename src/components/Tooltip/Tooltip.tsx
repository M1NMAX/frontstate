import React from 'react'

interface IPosition {
  top: string
  bottom: string
  right: string
  left: string
}

const positions: IPosition = {
  top: 'bottom-full',
  bottom: 'top-full',
  right: 'left-full',
  left: 'right-full'
}

export default function Tooltip(props: ITooltip) {
  const {
    children,
    label,
    position = 'top',
    uppercase = false,
    compact = false
  } = props

  const classname = `${positions[position]}
  ${uppercase && 'uppercase'}
  ${compact ? 'px-1' : 'py-1 px-2'}
   absolute z-10 w-auto m-2 min-w-max
 rounded text-center text-white bg-black font-bold transition-all
 duration-100 scale-0  group-hover:hidden `

  return (
    <div className='relative group'>
      <span className={classname}>{label}</span>
      {children}
    </div>
  )
}

interface ITooltip {
  children: React.ReactNode
  label: string
  position?: 'top' | 'bottom' | 'right' | 'left'
  uppercase?: boolean
  compact?: boolean
}
