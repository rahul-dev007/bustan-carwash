"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0A4F8F] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/image/logo2.png"
            alt="Bustan Alzuhoor Parking Car Washing L.L.C. Logo"
            className="h-12 w-auto"
          />
          <span className="hidden md:block text-white text-xl font-semibold relative">
            <span className="inline-block relative">
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 rounded animate-pulse"></span>
              Bustan Alzuhoor Parking Car Washing L.L.C
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["/", "/about", "/services", "/partners", "/contact"].map((href, idx) => {
            const text = ["Home", "About", "Services", "Partners", "Contact"][idx];
            return (
              <Link
                key={idx}
                href={href}
                className="text-white hover:text-[#5F9EA0] transition-colors duration-200"
              >
                {text}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A4F8F] shadow-lg absolute top-full left-0 w-full z-40 animate-slideDown">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white">
            {["/", "/about", "/services", "/partners", "/contact"].map((href, idx) => {
              const text = ["Home", "About", "Services", "Partners", "Contact"][idx];
              return (
                <li key={idx} className="w-full">
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 hover:bg-[#1E629F] rounded w-full text-center transition-all duration-200"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
