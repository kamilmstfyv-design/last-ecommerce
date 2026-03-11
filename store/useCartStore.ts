import { create } from "zustand";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string[];
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: any) => void;
  removeItem: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (product: any) =>
    set((state) => {
      const movcutItem = state.items.find((item) => item._id === product._id);
      if (!movcutItem) {
        return {
          items: [...state.items, { ...product, quantity: 1 }],
        };
      }
      return {
        items: state.items.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }),
  removeItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((item) => item._id !== id),
    })),
  incrementQuantity: (id: string) =>
    set((state) => ({
      items: state.items.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  decrementQuantity: (id: string) =>
    set((state) => ({
      items: state.items.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    })),
}));
