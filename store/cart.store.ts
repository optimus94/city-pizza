import { CartItemParams } from "@/type";
import { create } from "zustand";

type CartState = {
  items: CartItemParams[];
  addItem: (item: Omit<CartItemParams, "quantity" | "totalPrice">) => void;
  increaseQty: (variantId: string) => void;
  decreaseQty: (variantId: string) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
};

type CartSummary = {
  subTotal: () => number;
  tax: () => number;
  total: () => number;
};

const TAX_RATE = 0.13;
const DELIVERY_FEE = 3.99;

const useCartStore = create<CartState & CartSummary>((set, get) => ({
  items: [],

  subTotal: () => get().items.reduce((sum, item) => sum + item.totalPrice, 0),
  tax: () => get().subTotal() * TAX_RATE,
  total: () => get().subTotal() + get().tax() + DELIVERY_FEE,

  // Adding items to the cart logic.
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.variantId === item.variantId);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.variantId === item.variantId
              ? {
                  ...i,
                  quantity: i.quantity + 1,
                  totalPrice: (i.quantity + 1) * i.unitPrice,
                }
              : i
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            ...item,
            quantity: 1,
            totalPrice: item.unitPrice,
          },
        ],
      };
    }),

  // Increasing exisiting items into the cart logic.
  increaseQty: (variantId) =>
    set({
      items: get().items.map((i) =>
        i.variantId === variantId
          ? {
              ...i,
              quantity: i.quantity + 1,
              totalPrice: (i.quantity + 1) * i.unitPrice,
            }
          : i
      ),
    }),

  // Descreasing exisiting items into the cart logic.
  decreaseQty: (variantId) =>
    set({
      items: get()
        .items.map((i) =>
          i.variantId === variantId
            ? {
                ...i,
                quantity: i.quantity - 1,
                totalPrice: (i.quantity - 1) * i.unitPrice,
              }
            : i
        )
        .filter((i) => i.quantity > 0),
    }),

  //Deleting exisiting items from the cart logic.
  removeItem: (variantId) =>
    set({
      items: get().items.filter((i) => i.variantId !== variantId),
    }),

  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
