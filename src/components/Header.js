'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import landingLogo from '../images/landinglogo.jpeg';

export default function Header() {

  const navigation = [
    { name: 'About us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Text - Left Side */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
            <Image src={landingLogo} alt="PAVE Logo" width={35} height={35} className="w-10 h-10" />
            <div className="text-4xl font-kadwa text-white">
              pave
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#E5B8F4] px-3 py-2 text-base transition-colors duration-200 font-semibold"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button - Right Side */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-500 text-white px-8 py-2 rounded-md text-base hover:shadow-lg hover:cursor-pointer transform transition-all duration-200 hover:bg-blue-600
            font-semibold">
              View public logs
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
