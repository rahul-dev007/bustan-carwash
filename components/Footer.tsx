// components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 shadow-inner mt-12">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-blue-600">Bustan Alzuhoor</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Eco-friendly, scratch-proof car wash service in Dubai. Committed to
            sustainable practices and top-quality care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-blue-600">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-blue-500 transition-colors">Partners</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-blue-600">Contact Info</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Md Mujibul Haq <br />
            Managing Director
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Email: <a href="mailto:bustanalzuhoorparking@gmail.com" className="hover:text-blue-500">bustanalzuhoorparking@gmail.com</a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Phone: <a href="tel:+971566782890" className="hover:text-blue-500">+971 56 6782890</a>, <a href="tel:+9715625762116" className="hover:text-blue-500">+971 5625762116</a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Bustan Alzuhoor Parking Car Washing L.L.C. All rights reserved.
      </div>
    </footer>
  );
}
