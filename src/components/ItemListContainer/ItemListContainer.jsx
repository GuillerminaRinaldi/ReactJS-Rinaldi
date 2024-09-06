import React, { useEffect, useState } from "react";
import { getProducts } from "../../Api"; 

export const ItemListContainer = ({ texto }) => {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    getProducts().then((data) => {
      setItems(data); 
      setLoading(false); 
    });
  }, []);

  return (
    <div>
      <h2>{texto}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: "20px" }}>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} width="150" />
              <p>Precio: ${item.price}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
