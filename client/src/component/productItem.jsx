import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/action";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#1f2937] rounded-3xl shadow-2xl overflow-hidden relative group border border-gray-700">
      {/* Category Tag */}
      <span className="absolute top-4 right-4 bg-pink-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full z-10">
        {product.category || "Electronics"}
      </span>
      
      <div className="h-56 overflow-hidden">
        <img 
          src={product.ImageUrl || "https://via.placeholder.com/300"} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga...
        </p>
        
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500 mb-1">Available: {product.quantity || 10}</p>
            <p className="text-2xl font-black text-white">${product.price}</p>
          </div>
          <button 
            onClick={() => dispatch(addToCart(product))}
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-5 py-2 rounded-xl font-bold text-sm transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;