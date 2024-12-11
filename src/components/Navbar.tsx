"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1440px] mx-auto shadow-md">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b">
        <div>
          <Link href={"/"}>
            <h1 className="text-3xl font-bold text-gray-800">AVION</h1>
          </Link>
        </div>
        <div className="hidden md:block flex-grow"></div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-gray-700">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-900">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Blog
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button aria-label="Search">
              <FiSearch className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <Link href="/shopping-cart" aria-label="Cart">
              <FiShoppingCart className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6 " />
            </Link>
            <button aria-label="User">
              <FaUserCircle className="text-gray-600 w-6 h-6 sm:w-7 sm:h-7" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Menu Toggle"
            >
              <FiMenu className="text-gray-600 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <ul className="flex flex-wrap justify-center gap-6 py-3 text-gray-700">
          <li>
            <Link href="products" className="hover:text-gray-900">
              All products
            </Link>
          </li>
          <li>
            <Link href="products" className="hover:text-gray-900">
              Plant pots
            </Link>
          </li>
          <li>
            <Link href="products" className="hover:text-gray-900">
              Ceramics
            </Link>
          </li>
          <li>
            <Link href="products" className="hover:text-gray-900">
              Tables
            </Link>
          </li>
          <li>
            <Link href="products" className="hover:text-gray-900">
              Chairs
            </Link>
          </li>
          <li>
            <Link href="products" className="hover:text-gray-900">
              Crockery
            </Link>
          </li>
          <li>
            <Link href="products" className="hover:text-gray-900">
              Tableware
            </Link>
          </li>
          <li>
            <Link href="products" className="hover:text-gray-900">
              Cutlery
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="text-gray-600"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="about" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="about" className="hover:text-gray-900">
                About us
              </Link>
            </li>
            <li>
              <Link href="contact" className="hover:text-gray-900">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
