import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../component/productItem";
import AddProduct from "../component/addProduct";

const Page = () => {
  // ดึงข้อมูลสินค้าจาก Store
  const { products } = useSelector((state) => state.product || { products: [] });

  return (
    <div className="min-h-screen bg-[#111827] p-4 md:p-10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* ส่วนแสดงรายการสินค้า */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-8">Home</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* ส่วน Add Product ด้านขวา */}
        <div className="w-full lg:w-96">
          <div className="sticky top-10">
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;