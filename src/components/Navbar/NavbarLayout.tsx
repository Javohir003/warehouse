'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { Menu, X } from 'lucide-react';


import uz from "../../../public/icons/uz.svg";
import ru from "../../../public/icons/rus.svg";
import en from "../../../public/icons/eng.svg";

export default function NavbarLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationLinks = [
    { href: "/about", label: "Biz Haqimizda" },
    { href: "/services", label: "Xizmatlar" },
    { href: "/news", label: "Yangiliklar" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Bog'lanish" }
  ];

  const languages = [
    { code: "uz", label: "UZ", icon: uz },
    { code: "en", label: "EN", icon: en },
    { code: "ru", label: "RU", icon: ru }
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#ffffffdd] backdrop-blur-sm shadow z-50">
      <div className="container mx-auto px-4">
        {/* Top Header - Hidden on mobile */}
        <header className="hidden sm:flex items-center justify-between py-2 border-b">
          <RiInstagramFill className="text-[25px] text-gray-600 hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
          <ul className="flex gap-4">
            {languages.map((lang) => (
              <li key={lang.code} className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                <Image width={20} height={20} src={lang.icon || "/placeholder.svg"} alt={`${lang.label} logo`} />
                <span className="text-sm font-medium">{lang.label}</span>
              </li>
            ))}
          </ul>
        </header>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <h3 className="text-[18px] font-bold leading-4">Warehouse Systems</h3>
              <p className="text-[12px] text-gray-400">Consulting</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className=" pt-4">
            {/* Mobile Navigation Links */}
            <ul className="space-y-3 mb-4">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Language Selector */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-500 mb-3 px-4">Til tanlang:</p>
              <ul className="flex gap-4 px-4">
                {languages.map((lang) => (
                  <li key={lang.code} className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                    <Image width={16} height={16} src={lang.icon || "/placeholder.svg"} alt={`${lang.label} logo`} />
                    <span className="text-sm font-medium">{lang.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Social Media */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center justify-center">
                <RiInstagramFill className="text-[25px] text-gray-600 hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-20 z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
