import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cart/action";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-100 last:border-0">
            <div className="flex items-center gap-4">
                <img src={item.ImageUrl} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-blue-600 font-semibold">${item.price}</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg overflow-hidden">
                    <button 
                        onClick={() => dispatch(decreaseQuantity(item.productId))}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold"
                    >-</button>
                    
                    <span className="px-4 py-1 font-medium">{item.quantity}</span>

                    <button 
                        onClick={() => dispatch(increaseQuantity(item.productId))}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold"
                    >+</button>
                </div>

                <button 
                    onClick={() => dispatch(removeFromCart(item.productId))}
                    className="btn btn-error btn-sm btn-outline"
                >
                    ลบ
                </button>
            </div>
        </div>
    );
};

export default CartItem;