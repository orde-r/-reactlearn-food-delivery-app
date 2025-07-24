import type { MenuItem } from "../types/Menu";

export const menuItems: MenuItem[] = [
  { id: 1, restaurantId: 1, name: "Margherita Pizza", price: 80_000 },
  { id: 2, restaurantId: 1, name: "Pepperoni Pizza", price: 90_000 },
  { id: 3, restaurantId: 2, name: "Classic Burger", price: 75_000 },
  { id: 4, restaurantId: 2, name: "Cheese Fries", price: 35_000 },
  { id: 5, restaurantId: 3, name: "Salmon Nigiri", price: 120_000 },
  { id: 6, restaurantId: 3, name: "Tuna Roll", price: 100_000 },
];
