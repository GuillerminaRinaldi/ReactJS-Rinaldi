import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/item/${product.id}`}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;