/*import React from 'react'

export default function App() {
  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h1>My React Product Store</h1>
      <hr />
    </div>
  )
}*/

import React from 'react'
import ProductCard from './Product-app.jsx' // Notice the hyphen here matching your filename!

export default function App() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 29.99, category: "Electronics", stock: 5 },
    { id: 2, name: "Running Shoes", price: 89.95, category: "Footwear", stock: 0 }, 
    { id: 3, name: "Leather Wallet", price: 39.99, category: "Accessories", stock: 12 },
    { id: 4, name: "Backpack", price: 49.99, category: "Luggage", stock: 0 },       
    { id: 5, name: "Water Bottle", price: 19.99, category: "Sports", stock: 8 }
  ];

  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <h1>My React Product Store</h1>
      <hr />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            name={product.name} 
            price={product.price} 
            category={product.category} 
            stock={product.stock} 
          />
        ))}
      </div>
    </div>
  )
}

