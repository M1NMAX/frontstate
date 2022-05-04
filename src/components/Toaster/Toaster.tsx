import React from 'react'

interface IToaster {
  children: React.ReactNode
  title?: string
  color?: string
  disallowClose?: boolean
  icon?: React.ReactNode
}

export default function Toaster(props: IToaster) {
  const {
    children,
    title = '',
    color = 'green',
    disallowClose = false,
    icon = ''
  } = props

  return (
    <div className=' p-2 rounded shadow-lg  '>
      <div className='flex items-start justify-between rounded border-l-4 border-green-500'>
        <span className={`px-2 text-${color}-500`}>{icon}</span>
        <span className={`h-full rounded-full border border-${color}-500`}>
          bbb
        </span>
        <div className=' w-full'>
          <p className='font-bold text-lg'>{title}</p>
          {children}
        </div>
        <button className={`${disallowClose ? 'hidden' : 'block'}`}>
          &times;
        </button>
      </div>
    </div>
  )
}
