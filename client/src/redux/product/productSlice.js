import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // ใส่ข้อมูลตัวอย่างไว้เช็คว่า UI แสดงผลหรือไม่
  products: [
    {
      id: 1,
      title: "Sample Shoe",
      price: 150,
      ImageUrl: "https://via.placeholder.com/150",
      category: "Shoes"
    }
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    // เพิ่ม reducer สำหรับลดจำนวนสต็อกถ้าจำเป็น
    removeQuantity(state, action) {
        const product = state.products.find(p => p.id === action.payload);
        if (product && product.quantity > 0) {
            product.quantity -= 1;
        }
    }
  },
});

export const { addProduct, removeQuantity } = productSlice.actions;
export default productSlice.reducer;