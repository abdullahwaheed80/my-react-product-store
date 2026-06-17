import React from 'react';

export default function ProductCard({ name, price, category, stock }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    maxWidth: '250px',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    position: 'relative'
  };

  const badgeStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '10px'
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Price:</strong> ${price}</p>
      {stock === 0 && <div style={badgeStyle}>Out of Stock</div>}
    </div>
  );
}


