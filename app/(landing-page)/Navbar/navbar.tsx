'use client'

import React, { useEffect, useState } from "react";
import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/menu";
import ActionButtons from "./_components/buttons";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `
    sticky top-0 z-50 w-full
    transition-all duration-300 ease-in-out
    ${hasScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-[#fffafa]"}
  `;

  return (
    <nav className={navbarClasses} aria-label="Menu principal">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3">
        {/* Logo + Menu */}
        <div className="flex items-center space-x-8">
          <Logo />
          <NavigationMenuBar />
        </div>

        {/* Botões de Ação */}
        <div className="flex items-center space-x-4">
          <ActionButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
