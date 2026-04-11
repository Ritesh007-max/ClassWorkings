import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BasicButtons from './components/BasicButton'
import TextButtons from './components/TextButton'
import ColorButtons from './components/ColorButton'
import IconButtons from './components/IconButton'
import MusicPlayer from './components/MusicPlayer'

function App() {
  
  return (
    <>
      <BasicButtons />
      <TextButtons />
      <ColorButtons />
      <IconButtons />
      <MusicPlayer />
    </>
  )
}

export default App
