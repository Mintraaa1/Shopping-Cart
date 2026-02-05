import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";
import productReducer from "./product/productSlice"; //

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer, // ชื่อ "product" ตรงนี้ต้องตรงกับที่ใช้ใน page.jsx
  },
});

export default store;