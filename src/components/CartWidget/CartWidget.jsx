import React from 'react';

const CartWidget = ({ cart }) => {
  console.log("Cart Items:", cart); 
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      🛒 {totalItems}
    </div>
  );
};

export default CartWidget;