import { Link } from 'react-router-dom';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/electronics">Electronica</Link></li>
        <li><Link to="/category/jewelery">Joyas</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
      <CartWidget cart={cart} /> 
    </nav>
  );
};



