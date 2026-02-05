import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cart/action";

const MyCart = () => {
  const cart = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = cart.length > 0 ? 4.99 : 0;

  return (
    <div className="min-h-screen bg-[#111827] p-6 md:p-12 text-white">
      <h2 className="text-2xl font-bold mb-10">Shopping Cart</h2>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* รายการสินค้าในตะกร้า */}
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <div key={item.productId} className="bg-white text-gray-900 p-4 rounded-2xl flex items-center gap-6 shadow-xl">
              <img src={item.ImageUrl} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
                <p className="text-xs text-blue-600 font-bold">Category: ${item.category || "General"}</p>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center border rounded-lg bg-gray-50">
                  <button onClick={() => dispatch(decreaseQuantity(item.productId))} className="px-3 py-1 hover:bg-gray-200">-</button>
                  <span className="px-3 font-bold">{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.productId))} className="px-3 py-1 hover:bg-gray-200">+</button>
                </div>
                <p className="w-16 font-bold text-right">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => dispatch(removeFromCart(item.productId))} className="text-gray-300 hover:text-red-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            </div>
          ))}
          {cart.length === 0 && <p className="text-gray-500 text-center py-10">Your cart is empty.</p>}
        </div>

        {/* สรุปยอดเงิน */}
        <div className="w-full lg:w-96 bg-white text-gray-800 p-8 rounded-3xl shadow-2xl h-fit">
          <div className="space-y-4 mb-6 border-b pb-6 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-bold">${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-gray-400"><span>Shipping</span><span className="font-bold">${shipping}</span></div>
          </div>
          <div className="flex justify-between items-start mb-8">
            <span className="text-lg font-bold">Total</span>
            <div className="text-right">
              <p className="text-3xl font-black text-indigo-600">${(subtotal + shipping).toFixed(2)} USD</p>
              <p className="text-[10px] text-gray-400">including VAT</p>
            </div>
          </div>
          <button className="w-full bg-[#4f46e5] text-white py-4 rounded-2xl font-bold hover:bg-[#4338ca] transition shadow-lg">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;