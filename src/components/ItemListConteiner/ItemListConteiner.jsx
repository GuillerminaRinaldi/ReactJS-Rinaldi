import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard'; // Componente para mostrar cada producto

export const ItemListContainer = ({ texto }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Simular llamada a la API (esto se conecta al punto 5)
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.mipagina.com/products${categoryId ? `?category=${categoryId}` : ''}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]); // Dependencias que escuchan cambios en la URL

  return (
    <div>
      <h2>{texto}</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} /> // Punto 6
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;