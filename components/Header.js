import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#1f5f8d] text-white flex justify-between items-center py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork-icon lucide-git-fork stroke-[#fdb557]"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>
        <h1 className="text-2xl font-semibold">CivicDataSpace</h1>
      </div>
    <div className="flex-1 flex justify-end items-center space-x-6">
      {/* Menu */}
      <nav className="flex space-x-6 text-md font-medium hidden md:block">
        <Link href="#all-data" className="uppercase hover:text-[#84dccf] text-[#84dccf] transition">
          ALL DATA
        </Link>
        <Link href="#sectors" className="uppercase hover:text-[#84dccf] transition">
          SECTORS
        </Link>
        <Link href="#use-cases" className="uppercase hover:text-[#84dccf] transition">
          USE CASES
        </Link>
        <Link href="#publishers" className="uppercase hover:text-[#84dccf] transition">
          PUBLISHERS
        </Link>
        <Link href="#about-us" className="uppercase hover:text-[#84dccf] transition">
          ABOUT US
        </Link>
      </nav>

      {/* Login/Signup Button */}
      
        <button className="uppercase bg-[#84dccf] text-neutral-800 font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[#84dccf] transition">
          LOGIN / SIGNUP
        </button>
    
      </div>
      </div>
    </header>
  );
};

export default Header;
