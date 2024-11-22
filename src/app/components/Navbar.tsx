"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-wide hover:underline text-white">
              DeliveryApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <Link href="/about" className="hover:underline text-white">
              About
            </Link>
            <Link href="/services" className="hover:underline text-white">
              Services
            </Link>
            <Link href="/contact" className="hover:underline text-white">
              Contact
            </Link>
            <Link href="/login" className="hover:underline text-white">
              Login
            </Link>
            <Link href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block hover:underline text-white">
              Home
            </Link>
            <Link href="/about" className="block hover:underline text-white">
              About
            </Link>
            <Link href="/services" className="block hover:underline text-white">
              Services
            </Link>
            <Link href="/contact" className="block hover:underline text-white">
              Contact
            </Link>
            <Link href="/login" className="block hover:underline text-white">
              Login
            </Link>
            <Link
              href="/signup"
              className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
