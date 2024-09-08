import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/category/:category" element={<ItemListContainer addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
