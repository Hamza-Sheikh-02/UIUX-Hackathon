"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { ModeToggle } from "./toggle-button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1440px] h-[132px] md:h-[132px] sm:h-[69px] mx-auto border-b shadow-md">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 h-full">
        <div className="flex items-center">
          <button aria-label="Search">
            <FiSearch className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div>
          <h1 className="text-3xl md:text-2xl font-bold text-gray-800 text-center">
            Avion
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <button aria-label="Cart">
              <FiShoppingCart className="text-gray-600 w-5 h-5" />
            </button>
            <button aria-label="User">
              <FaUserCircle className="text-gray-600 w-6 h-6" />
            </button>
          </div>
          
          <div className="md:hidden">
            <ModeToggle />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Menu Toggle"
          >
            <FiMenu className="text-gray-600 w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-center border-t">
        <ul className="flex flex-row gap-6 md:gap-12 p-3 md:p-4 text-gray-600 text-center">
          <li>
            <Link href="#" className="hover:text-gray-900">
              Plant pots
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-900">
              Ceramics
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-900">
              Tables
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-900">
              Chairs
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-900">
              Crockery
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-900">
              Tableware
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-900">
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
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#" className="hover:text-gray-900">
                Plant pots
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Ceramics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Tables
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Chairs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Crockery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Tableware
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Cutlery
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
