import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'


render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById('root')
)
