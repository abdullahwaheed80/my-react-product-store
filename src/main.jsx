import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // This imports the file containing your 5 products

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
