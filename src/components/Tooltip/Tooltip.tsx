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
  right: 'left-full ',
  left: 'right-full'
}

export default function Tooltip(props: ITooltip) {
  const {
    children,
    label,
    position = 'top',
    bold = false,
    uppercase = false,
    compact = false
  } = props

  const classname = `${positions[position]}
  ${bold && 'font-bold'}
  ${uppercase && 'uppercase'}
  ${compact ? 'px-1' : 'py-1 px-2'}
  absolute z-10 w-auto m-2 min-w-max
 rounded text-center text-white bg-black invisible group-hover:visible `

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
  bold?: boolean
  uppercase?: boolean
  compact?: boolean
}
