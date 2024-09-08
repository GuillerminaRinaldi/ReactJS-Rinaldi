import { useState } from 'react';

export const Cart = ({ cart }) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  return (
    <div>
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito esta vacio</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <h3>{product.title}</h3>
              <p>Precio: ${product.price}</p>
              <p>Cantidad: {quantities[index]}</p>
              <button onClick={() => increaseQuantity(index)}>+</button>
              <button onClick={() => decreaseQuantity(index)}>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
