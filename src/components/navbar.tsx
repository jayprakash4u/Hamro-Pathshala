"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions", hasDropdown: true },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100/90 shadow-xs transition-all">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3.5 sm:py-4 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex size-10 sm:size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] shadow-md shadow-emerald-800/15 transition-transform duration-200 group-hover:scale-105">
            {/* School Mortarboard Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z"
                fill="currentColor"
              />
              <path
                d="M5 13.18V17.18C5 19.84 8.13 22 12 22C15.87 22 19 19.84 19 17.18V13.18L12 17L5 13.18Z"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Hamro<span className="text-[#159447]">Pathshala</span>
            </span>
            <span className="text-[10px] font-medium tracking-wide text-slate-500">
              Smart EMIS Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeNav === link.name;
            return (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  onClick={() => setActiveNav(link.name)}
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-[#159447] ${
                    isActive ? "text-[#159447] font-semibold" : "text-slate-700"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="size-4 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-2.5 left-0 right-0 h-0.5 rounded-full bg-[#159447]" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="hidden items-center gap-4 sm:flex">
          {/* Search Button */}
          <button
            type="button"
            aria-label="Search"
            className="flex size-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-emerald-50 hover:text-[#159447]"
          >
            <Search className="size-5" />
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            className="rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-800 shadow-xs transition-all hover:border-[#159447] hover:bg-white hover:text-[#159447]"
          >
            Login
          </Link>

          {/* Book Demo CTA */}
          <Link
            href="/book-demo"
            className="group flex items-center gap-2 rounded-lg bg-[#0F5132] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-950/15 transition-all duration-200 hover:bg-[#159447] hover:shadow-emerald-700/25"
          >
            <span>Book a Demo</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button (Clean minimalist style) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-10 items-center justify-center text-slate-900 transition-colors hover:text-[#159447]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <div className="flex flex-col gap-1.5 justify-center items-center w-6">
                <span className="block h-0.5 w-6 rounded-full bg-slate-900" />
                <span className="block h-0.5 w-6 rounded-full bg-slate-900" />
                <span className="block h-0.5 w-6 rounded-full bg-slate-900" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-6 py-6 lg:hidden animate-fade-in shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between text-base font-medium py-2 ${
                  activeNav === link.name ? "text-[#159447] font-semibold" : "text-slate-800"
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="size-4" />}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-slate-100">
            <Link
              href="/login"
              className="flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white py-3 text-sm font-semibold text-slate-800 shadow-xs"
            >
              Login
            </Link>
            <Link
              href="/book-demo"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0F5132] py-3 text-sm font-semibold text-white shadow-md"
            >
              <span>Book a Demo</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
