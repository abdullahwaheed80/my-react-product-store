/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProductCard from '/Product-app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <ProductCard name="Wireless Mouse" price={29.99} category="Electronics" />
      <ProductCard name="Running Shoes" price={89.95} category="Footwear" />
      <ProductCard name="Leather Wallet" price={39.99} category="Accessories" />
      <ProductCard name="Backpack" price={49.99} category="Luggage" />
      <ProductCard name="Water Bottle" price={19.99} category="Sports" />
      <ProductCard name="Sunglasses" price={24.99} category="Accessories" />
    </div>
  </StrictMode>,
)*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // This imports the file containing your 5 products

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
