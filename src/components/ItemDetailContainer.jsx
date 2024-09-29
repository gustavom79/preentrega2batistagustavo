
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`api/item/${itemId}`)
      .then(response => response.json())
      .then(data => setItem(data));
  }, [itemId]);

  return (
    <div className="detail">
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
