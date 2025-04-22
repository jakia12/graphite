"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent shadow-md px-6 py-4">
      <div className="lg:px-[90px] px-[40px] mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Graphite
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-16">
          <Link href="#" className="text-white hover:text-blue-600 text-[17px]">
            Features
          </Link>
          <Link href="#" className="text-white hover:text-blue-600 text-[17px]">
            Help
          </Link>
          <Link href="#" className="text-white hover:text-blue-600 text-[17px]">
            Login
          </Link>
          <button
            className="inline-flex items-center justify-center 
              py-[12px] h-[42px] px-[23px] 
              text-white text-[17px] leading-[24px] 
              font-bold font-sans 
              border-2 border-[#334AF4] hover:bg-[#334AF4]
              rounded-full bg-transparent 
              transition-colors duration-300 ease-out 
              ml-[13px] focus:outline-none cursor-pointer"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger + Dropdown */}
        <div className="md:hidden relative">
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full right-0 w-[200px] bg-[#fff] rounded-md shadow-lg mt-2 p-4 z-50">
              <div className="flex flex-col space-y-4">
                <Link href="#" className="text-black hover:text-blue-600">
                  Home
                </Link>
                <Link href="#" className="text-black hover:text-blue-600">
                  About
                </Link>
                <Link href="#" className="text-black hover:text-blue-600">
                  Services
                </Link>
                <button
                  className="inline-flex items-center justify-center 
                    py-[12px] h-[42px] px-[23px] 
                    text-[#334AF4] text-[17px] leading-[24px] 
                    font-semibold font-sans 
                    border-2 border-[#334AF4] hover:bg-[#334AF4] hover:text-[#ffffff]
                    rounded-full bg-transparent 
                    transition-colors duration-300 ease-out 
                    focus:outline-none cursor-pointer"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
