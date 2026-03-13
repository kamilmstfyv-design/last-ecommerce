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
  toggleWishlist: (product: any) => void;
  wishList: any[];
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  wishList: [],
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
  toggleWishlist: (product: any) =>
    set((state) => {
      // 1. Yoxlayırıq: Bu məhsul artıq wishlist-də var?
      const isExisted = state.wishList.some(
        (item: any) => item._id === product._id,
      );

      // 2. Əgər varsa, heç nə etmə (state-i olduğu kimi qaytar)
      if (isExisted) {
        return {
          wishList: state.wishList.filter((item) => item._id !== product._id),
        };
      }

      // 3. Yoxdursa, yeni massiv yaradaraq əlavə et
      return {
        wishList: [...state.wishList, product],
      };
    }),
}));
