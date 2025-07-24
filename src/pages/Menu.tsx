import { menuItems } from "../data/MenuData";
import { restaurants } from "../data/RestaurantData";
import { useParams } from "react-router-dom";
import useCart from "../stores/CartStore";
// import type { MenuItem } from "../types/Menu";
// useParams() is a React Router hook
// It lets you access dynamic parts of the URL, like /menu/:id

// interface Props {
//   addToCart: (item: MenuItem) => void;
// }

const Menu = () => {
  const { id } = useParams();
  // same as
  // const params = useParams();
  // const id = params.id;

  const restaurantId = parseInt(id || "0");
  const restaurant = restaurants.find(r => r.id === Number(id));
  const items = menuItems.filter((item) => item.restaurantId == restaurantId);

  const {addToCart} = useCart();

  return (
    <div>
      <h3>Menu Page</h3>
      <p>Showing menu for Restaurant "{restaurant?.name}" (id: {id}) </p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Rp{item.price}
            <button onClick={() => addToCart(item)} >Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
