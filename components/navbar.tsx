"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-[#1d3935]/5 bg-[#faf9f7]">
      <div className="mx-auto flex h-[82px] w-full max-w-[1440px] items-center justify-between px-7 sm:px-10 lg:px-16">
        
        {/* ================= LOGO ================= */}
        <a
          href="/"
          className="flex items-center leading-none"
          aria-label="Pain Free Physiotherapy Clinic"
        >
          <div>
            <div className="whitespace-nowrap text-[31px] font-normal tracking-[-1.8px] text-[#111111] sm:text-[34px]">
              PAIN<span className="text-[#e9956d]">FREE</span>
            </div>

            <div className="mt-[5px] text-[8px] font-semibold tracking-[3.5px] text-[#41665d] sm:text-[9px]">
              PHYSIOTHERAPY CLINIC
            </div>
          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          <a
            href="#home"
            className="group relative py-2 text-[15px] font-medium text-[#333333] transition-colors duration-200 hover:text-[#e9956d]"
          >
            Home

            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#e9956d] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#about"
            className="group relative py-2 text-[15px] font-medium text-[#333333] transition-colors duration-200 hover:text-[#e9956d]"
          >
            Treatments

            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#e9956d] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#treatments"
            className="group relative py-2 text-[15px] font-medium text-[#333333] transition-colors duration-200 hover:text-[#e9956d]"
          >
            Gallery

            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#e9956d] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#reviews"
            className="group relative py-2 text-[15px] font-medium text-[#333333] transition-colors duration-200 hover:text-[#e9956d]"
          >
            Reviews

            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#e9956d] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#contact"
            className="group relative py-2 text-[15px] font-medium text-[#333333] transition-colors duration-200 hover:text-[#e9956d]"
          >
            Contact

            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#e9956d] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* ================= APPOINTMENT ================= */}
        <a
          href="#appointment"
          className="hidden rounded-full bg-[#e9956d] px-7 py-[12px] text-[15px] font-medium text-white shadow-[0_5px_18px_rgba(233,149,109,0.18)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#dd875f] lg:block"
        >
          Book Appointment
        </a>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1d3935]/10 bg-white lg:hidden"
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
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-7 py-5 sm:px-10">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="border-b border-[#1d3935]/5 py-4 text-[15px] font-medium text-[#333333]"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="border-b border-[#1d3935]/5 py-4 text-[15px] font-medium text-[#333333]"
          >
            About
          </a>

          <a
            href="#treatments"
            onClick={() => setMenuOpen(false)}
            className="border-b border-[#1d3935]/5 py-4 text-[15px] font-medium text-[#333333]"
          >
            Treatments
          </a>

          <a
            href="#reviews"
            onClick={() => setMenuOpen(false)}
            className="border-b border-[#1d3935]/5 py-4 text-[15px] font-medium text-[#333333]"
          >
            Reviews
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="border-b border-[#1d3935]/5 py-4 text-[15px] font-medium text-[#333333]"
          >
            Contact
          </a>

          <a
            href="#appointment"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex h-[48px] items-center justify-center rounded-full bg-[#e9956d] text-[15px] font-medium text-white"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}