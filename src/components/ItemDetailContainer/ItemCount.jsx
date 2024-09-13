import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => console.log(`Added ${count} items to cart`)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;