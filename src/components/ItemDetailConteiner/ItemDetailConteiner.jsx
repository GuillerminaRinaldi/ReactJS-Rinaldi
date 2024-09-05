import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'; // Contador para añadir al carrito

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    // Simular llamada a la API para obtener detalles del producto (esto se conecta al punto 5)
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.mipagina.com/products/${itemId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [itemId]); // Dependencia que escucha cambios en la URL

  if (!product) {
    return <div>Loading...</div>; // Mostrar algo mientras se carga el producto
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <ItemCount /> {/* Punto 7: Agregar al carrito */}
    </div>
  );
};

export default ItemDetailContainer;