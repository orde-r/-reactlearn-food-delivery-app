import { Link } from "react-router-dom";
import { restaurants } from "../data/restaurantData";
import type { Restaurant } from "../types/Restaurant";

const Home = () => {
  return (
    <div>
      <h2>Our Restaurants</h2>
      <ul>
        {restaurants.map((restaurant: Restaurant) => (
          <li key={restaurant.id} style={{ marginBottom: "1rem" }}>
            <h4>{restaurant.name}</h4>
            <p>{restaurant.description}</p>
            <Link to={`/menu/${restaurant.id}`}>View Menu</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
