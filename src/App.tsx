import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import useCart from './stores/CartStore';

// import type { MenuItem } from './types/Menu';
// import { useState } from 'react';

// interface CartItemProp extends MenuItem {
//   quantity: number;
// }

function App() {

  // const [cart, setCart] = useState<CartItemProp[]>([]);

  // const addToCart = (item: MenuItem) => {
  //   setCart(
  //     (prev) => {
  //       const found = prev.find(i => i.id === item.id)
  //       if (found) {
  //         return prev.map(
  //           i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i
  //         )
  //       } else {
  //         return [...prev, {...item, quantity: 1}]
  //       }
  //     }
  //   )
  // }

  // const handleCheckOut = () => {
  //   alert("Order Placed");
  //   setCart([]);
  // }
  
  const {items} = useCart()

  return (
    <div>
      <nav style={{marginBottom: '1rem'}}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/menu">Menu</Link> |{' '}
        <Link to="/cart">Cart ({items.reduce((sum, item) => sum + item.quantity, 0)}) </Link> |{' '}
        <Link to="/checkout">Checkout</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu  />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      {/* When the URL matches a path, it shows the corresponding element. */}
    </div>
  )
}

export default App;

