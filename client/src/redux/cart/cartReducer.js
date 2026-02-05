import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actiontype";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const exist = state.find((p) => p.productId === action.payload.id);
      if (exist) {
        return state.map((p) => p.productId === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...state, { ...action.payload, productId: action.payload.id, quantity: 1 }];

    case REMOVE_FROM_CART:
      return state.filter((p) => p.productId !== action.payload);

    case INCREASE_QUANTITY:
      return state.map((p) => p.productId === action.payload ? { ...p, quantity: p.quantity + 1 } : p);

    case DECREASE_QUANTITY:
      return state.map((p) => p.productId === action.payload && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p);

    default:
      return state;
  }
};

export default cartReducer;