import { cartKey } from "@/constants/global";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

interface ProductCart {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: ProductCart[];
}

const loadState = (): CartState => {
  try {
    const storedState = getFromLocalStorage(cartKey);
    return storedState ? JSON.parse(storedState) : { cart: [] };
  } catch (err) {
    return { cart: [] };
  }
};

const initialState: CartState = loadState();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      setToLocalStorage(cartKey, JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.cart.splice(index, 1);
      }
      setToLocalStorage(cartKey, JSON.stringify(state));
    },

    clearCart: (state) => {
      state.cart = [];
      setToLocalStorage(cartKey, JSON.stringify(state));
    },

    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.cart[index].quantity += 1;
      }
      setToLocalStorage(cartKey, JSON.stringify(state));
    },

    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const index = state.cart.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.cart[index].quantity -= 1;
      }
      setToLocalStorage(cartKey, JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
