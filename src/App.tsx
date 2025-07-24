import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div>
      <nav style={{marginBottom: '1rem'}}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/menu">Menu</Link> |{' '}
        <Link to="/cart">Cart</Link> |{' '}
        <Link to="/checkout">Checkout</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App;

