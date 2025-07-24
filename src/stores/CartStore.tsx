import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { MenuItem } from "../types/Menu";

interface CartItemProp extends MenuItem {
  quantity: number;
}

type State = {
  items: CartItemProp[];
};

type Actions = {
  addToCart: (item: MenuItem) => void;
  checkOut: () => void;
};

// const useCart = create<State & Actions>((set) => ({
//   items: [],
//   addToCart: (item: MenuItem) => {
//     set((prev) => {
//       const found = prev.items.find((i) => i.id === item.id);
//       if (found) {
//         return {
//           items: prev.items.map((i) =>
//             i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//           ),
//         };
//       } else {
//         return { items: [...prev.items, { ...item, quantity: 1 }] };
//       }
//     });
//   },
//   checkOut: () => {
//     alert("Order Placed");
//     set({ items: [] });
//   },
// }));

const useCart = create<State & Actions>()(
  immer((set) => ({
    items: [],
    addToCart: (item: MenuItem) => {
      set((prev) => {
        const found = prev.items.find((i) => i.id === item.id);
        if (found) {
          found.quantity += 1;
        } else {
          prev.items.push({ ...item, quantity: 1 });
        }
      });
    },
    checkOut: () => {
      alert("Order Placed");
      // set({ items: [] });
      set((prev) => {
        prev.items = [];
      });
    },
  }))
);
export default useCart;
