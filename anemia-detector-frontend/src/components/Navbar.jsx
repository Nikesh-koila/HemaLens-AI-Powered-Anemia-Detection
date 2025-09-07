"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const menubarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile sidebar menu with slide animation
  const menuToggle = () => {
    if (menubarRef.current) {
      menubarRef.current.classList.toggle("translate-x-full");
      menubarRef.current.classList.toggle("translate-x-0");
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <div>
      <header className="relative border-b border-gray-200 bg-gray-50 backdrop-blur-sm  top-0 z-50">
        <div className="h-20 container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#079eff] rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold ">HemaLens</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-gray-600 hover:text-black transition-colors"
            >
              About Anemia
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-black transition-colors"
            >
              How It Works
            </Link>

            <Link href="/scan">
              <Button
                size="lg"
                className=" bg-[#079eff] hover:bg-[#0384d4] cursor-pointer "
              >
                Get Started
              </Button>
            </Link>
          </nav>
          <Menu className="md:hidden " size={38} onClick={menuToggle} />
        </div>
      </header>

      {menuOpen && (
        <div onClick={menuToggle} className="fixed inset-0 bg-black/40 z-60" />
      )}
      <div
        ref={menubarRef}
        className="fixed top-0 right-0 h-screen w-[95vw] translate-x-full transition-transform duration-300 ease-in-out z-80"
      >
        <div className="flex flex-col h-[90vh] mt-3 bg-white rounded-l-lg border-2 border-r-0 border-[#b0e1ff] py-5 px-3 ">
          {/* Mobile menu header with logo and close button */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#079eff] rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold ">HemaLens</span>
            </div>
            <X size={32} onClick={menuToggle} />
          </div>

          {/* Mobile menu content */}
          <div className="flex flex-col  mt-12 flex-grow px-4 ">
            <ul className="flex flex-col gap-10 ">
              <li>
                <Link
                  href="#about"
                  className="font-medium text-xl focus:text-[#079eff] "
                  onClick={menuToggle}
                >
                  About Anemia
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="font-medium text-xl focus:text-[#079eff] "
                  onClick={menuToggle}
                >
                  How it work
                </Link>
              </li>
            </ul>

            {/* Mobile CTA button positioned at bottom */}
            <div className="mt-auto mb-10 ">
              <Link href="/scan" className="block">
                <Button
                  size="lg"
                  className="w-full bg-[#079eff] hover:bg-[#0384d4] cursor-pointer  "
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
