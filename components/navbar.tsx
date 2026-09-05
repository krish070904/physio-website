"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Treatments", href: "#treatments" },
  { name: "Gallery", href: "#gallery" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Location", href: "#location" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1d3935]/5 bg-[#faf9f7]/92 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-[82px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        
        {/* ================= LOGO ================= */}
        <a
          href="#home"
          className="flex items-center leading-none"
          aria-label="Pain Free Physiotherapy Clinic"
        >
          <div>
            <div className="whitespace-nowrap text-[28px] font-normal tracking-[-1.8px] text-[#111111] sm:text-[32px]">
              PAIN<span className="text-[#e9956d]">FREE</span>
            </div>

            <div className="mt-[4px] text-[8px] font-semibold tracking-[3.2px] text-[#41665d] sm:text-[9px]">
              PHYSIOTHERAPY CLINIC
            </div>
          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-2 text-[14px] font-medium text-[#333333] transition-colors duration-200 hover:text-[#e9956d] xl:text-[15px]"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#e9956d] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ================= APPOINTMENT ================= */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#e9956d] px-6 py-[11px] text-[14px] font-medium text-white shadow-[0_5px_18px_rgba(233,149,109,0.22)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#dd875f] lg:block xl:text-[15px]"
        >
          Book Appointment
        </a>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d3935]/10 bg-white shadow-sm lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-[#1d3935]/5 bg-[#faf9f7] transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[580px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 sm:px-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#1d3935]/5 py-3 text-[15px] font-medium text-[#333333] transition-colors hover:text-[#e9956d]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex h-[46px] items-center justify-center rounded-full bg-[#e9956d] text-[14px] font-medium text-white shadow-sm"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}