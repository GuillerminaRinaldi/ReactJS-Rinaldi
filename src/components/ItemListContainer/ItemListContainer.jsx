import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../api/api';
import { ProductCard } from '../ProductCard';

export const ItemListContainer = ({ addToCart }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        const filteredProducts = await getProductsByCategory(category);
        console.log("Filtered Products:", filteredProducts);  
        setProducts(filteredProducts);
      } else {
        const allProducts = await getProducts();
        console.log("All Products:", allProducts);
        setProducts(allProducts);
      }
    };
    fetchData();
  }, [category]);
  

  return (
    <div>
      <h2>{category ? `Category: ${category}` : 'All Products'}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        )}
      </div>
    </div>
  );
  
};
