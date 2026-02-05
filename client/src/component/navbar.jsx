import React from 'react';
import { Link } from "react-router"; // ใช้สำหรับการเปลี่ยนหน้าโดยไม่ Refresh
import { useSelector } from "react-redux";

const Navbar = () => {
  // ดึงข้อมูลจาก Redux มานับจำนวนสินค้าในตะกร้า
  const cart = useSelector((state) => state.cart || []);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* ส่วนซ้าย: โลโก้/ชื่อร้าน */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-bold">daisyUI</Link>
      </div>

      {/* ส่วนขวา: ตะกร้า และ โปรไฟล์ */}
      <div className="flex-none gap-2">
        
        {/* 1. ปุ่มตะกร้าสินค้า */}
        <div className="dropdown dropdown-end">
          <Link to="/cart" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* แสดงตัวเลขจำนวนสินค้าจริงจาก Store */}
              {totalItems > 0 && (
                <span className="badge badge-sm indicator-item badge-primary">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* 2. เมนูโปรไฟล์ (ที่หายไป) */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;