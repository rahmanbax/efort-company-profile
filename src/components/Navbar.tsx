"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useNavbarStore } from "@/store/useNavbarStore";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const {
    isMobileMenuOpen,
    activeItem,
    isScrolled,
    toggleMobileMenu,
    closeMobileMenu,
    setActiveItem,
    setIsScrolled,
  } = useNavbarStore();

  // Scroll listener to update navbar background blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);

  // Active section observer when scrolling through anchors
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            const found = navItems.find(
              (item) => item.href.replace("#", "") === id
            );
            if (found) {
              setActiveItem(found.name);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    });

    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [setActiveItem]);

  const handleNavClick = (name: string) => {
    setActiveItem(name);
    closeMobileMenu();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? ""
        : ""
        }`}
    >
      <div className="max-w-7xl mx-4 sm:mx-auto py-2 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="flex items-center gap-2 group"
          >
            <Image
              src="/efort.svg"
              alt="EFORT Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="text-base font-semibold transition-colors">
                PT EFORT
              </span>
              <span className="uppercase text-xs">
                Digital Multisolution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-8">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`text-sm transition-colors ${
                    isActive
                      ? ""
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              className="transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? "max-h-[400px] opacity-100 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive
                  ? "bg-[#99C836]/10 text-[#99C836] font-semibold"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#99C836]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
