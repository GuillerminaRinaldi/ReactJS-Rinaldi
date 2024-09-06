import React, { useEffect, useState } from "react";
import products from "../../assets/data/products";

export const ItemListContainer = ({ texto }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000); 
    });

    getProducts.then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h2>{texto}</h2>
      <ul>
        {items.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          items.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Categoría: {item.category}</p>
              <img src={item.image} alt={item.name} width="100" />
              <p>{item.description}</p>
              <p>Precio: ${item.price}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ItemListContainer;