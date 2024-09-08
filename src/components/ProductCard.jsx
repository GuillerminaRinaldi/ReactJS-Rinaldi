import { Link } from 'react-router-dom';

export const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} style={{ width: '100px' }} />
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`}>Ver detalle</Link>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};
