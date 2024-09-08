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
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {quantities[index]}</p>
              <button onClick={() => increaseQuantity(index)}>+</button>
              <button onClick={() => decreaseQuantity(index)}>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
