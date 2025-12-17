import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Body from './components/body'
import StickyNoteProvider from './contexts/StickyNoteContext'

function App() {

  return (
    <StickyNoteProvider>
      <div id="main-container">
        <Header />
        <Body />
      </div>
    </StickyNoteProvider>
  )
}

export default App
