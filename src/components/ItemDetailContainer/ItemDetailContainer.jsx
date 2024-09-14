import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/api';

export const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      console.log("Product Data:", productData);  
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);
  

  return (
    <div>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={{ width: '150px' }} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </>
      ) : (
        <p>Cargando detalle de los productos...</p>
      )}
    </div>
  );
};
