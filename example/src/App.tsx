import React, { useState } from 'react'

import { Button, NumberInput, Textarea, TextInput, Tooltip } from 'frontstate'
import 'frontstate/dist/index.css'

const App = () => {
  const [value, setValue] = useState('nf')
  const [num, setNum] = useState('10')
  console.log(value)
  return (
    <div className='flex flex-col items-center justify-center space-y-2 p-2 '>
      <Button variant='light' size="lg" color='pink'  compact fullWidth onClick={() => console.log('ff')}>
        hello
      </Button>
      <Tooltip label='Tootiptext' position='right' compact>
        <button className='bg-red-500 w-12 h-8'>h</button>
      </Tooltip>
      <TextInput
        label='heh'
        placeholder='heo'
        description='fhn'
        rounded='xl'
        required
        disabled
      />
      <TextInput
        label='heh'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Textarea
        label='heh'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        rounded='xl'
        size='xl'
      />
      <NumberInput
        label='heh'
        min='12'
        value={num}
        onChange={(e) => setNum(e.currentTarget.value)}
        rounded='md'

      />
    </div>
  )
}

export default App
