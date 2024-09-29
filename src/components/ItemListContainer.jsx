
// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setItems(data.categories[categoryId] || []))
      .catch(error => console.error('Error loading mock data:', error));
  }, [categoryId]);

  return (
    <div className="container">
      {items.map(item => (
        <div key={item.id} className="card">
          <Link to={`/item/${item.id}`}>
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;


