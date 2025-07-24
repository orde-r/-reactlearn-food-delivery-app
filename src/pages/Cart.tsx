import useCart from "../stores/CartStore";
// import type { MenuItem } from "../types/Menu"

// interface CartItemProp extends MenuItem {
//   quantity: number;
// }

// interface Props {
//   cart: CartItemProp[];
//   onCheckOut: () => void;
// }


const Cart = () => {
  const {items, checkOut} = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )
  if (items.length === 0) return <p>Your cart is empty</p>
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {
          items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} - Rp{item.price * item.quantity}
            </li>
          ))
        }
      </ul>
      <h3>Total = {total}</h3>
      <button onClick={checkOut}>Checkout</button>
    </div>
  )
}

export default Cart