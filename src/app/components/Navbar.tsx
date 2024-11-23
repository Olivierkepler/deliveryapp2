"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For client-side navigation
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(""); // Clear search input
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-wide hover:underline">
              DeliveryApp
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1 rounded border-none text-black focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Search
            </button>
          </form>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/login" className="hover:underline">
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
            <form onSubmit={handleSearch} className="flex space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-1 rounded border-none text-black focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-700 hover:text-white transition"
              >
                Search
              </button>
            </form>
            <Link href="/" className="block hover:underline">
              Home
            </Link>
            <Link href="/about" className="block hover:underline">
              About
            </Link>
            <Link href="/services" className="block hover:underline">
              Services
            </Link>
            <Link href="/contact" className="block hover:underline">
              Contact
            </Link>
            <Link href="/login" className="block hover:underline">
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
