import { menuItems } from "../data/MenuData";
import { useParams } from "react-router-dom";
// useParams() is a React Router hook
// It lets you access dynamic parts of the URL, like /menu/:id

const Menu = () => {
  const { id } = useParams();
  const restaurantId = parseInt(id || "0");

  const items = menuItems.filter((item) => item.restaurantId == restaurantId);

  return (
    <div>
      <h3>Menu Page</h3>
      <p>Showing menu for Restaurant ID: {id} </p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Rp{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
