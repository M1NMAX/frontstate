import React from 'react'

import { Button, Tooltip } from 'frontstate'
import 'frontstate/dist/index.css'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <Button
        variant='light'
        compact
        onClick={() => {
          console.log('hle')
        }}
      >
        hello
      </Button>
      <Tooltip label='Tootiptext' position='right'  compact>
        <button className='bg-red-500 w-12 h-24'>h</button>
      </Tooltip>
    </div>
  )
}

export default App
