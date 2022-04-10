import React from 'react'

import { Button } from 'frontstate'
import 'frontstate/dist/index.css'

const App = () => {
  return (
    <div className='flex items-center justify-center p-2'>
      <Button variant='light'  compact
        onClick={() => {
          console.log('hle')
        }}
      >
        hello
      </Button>
    </div>
  )
}

export default App
