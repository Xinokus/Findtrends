import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  </StrictMode>,
)
