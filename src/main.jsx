import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Clarity from '@microsoft/clarity'
import './styles/global.css'
import App from './App.jsx'

Clarity.init(import.meta.env.VITE_CLARITY_PROJECT_ID)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
