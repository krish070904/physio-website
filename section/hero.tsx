"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#f8f6f2]">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/BG.png"
          alt=""
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* Very light readability layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6f2]/15 via-transparent to-transparent" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div
        id="home"
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-6 pb-10 pt-16 sm:px-10 lg:px-16 lg:pb-16"
      >
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[48%_52%]">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative z-20 max-w-[700px] pt-4 lg:pt-0">

            {/* Doctor */}
            <div className="hero-fade hero-delay-1 mb-7 flex items-center gap-5">
              <span className="h-[3px] w-[55px] rounded-full bg-[#df8b64]" />

              <div>
                <p className="text-[14px] font-semibold tracking-[3px] text-[#41665d]">
                  DR. BHAGRAB SAHOO
                </p>

                <p className="mt-2 text-[11px] font-medium tracking-[2.5px] text-[#41665d]/80">
                  SENIOR PHYSIOTHERAPIST CONSULTANT
                </p>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="hero-fade hero-delay-2 max-w-[700px] text-[52px] font-extrabold leading-[0.98] tracking-[-3px] text-[#183b36] sm:text-[64px] lg:text-[70px] xl:text-[76px]">
              Move Better.
              <br />
              Live{" "}
              <span className="text-[#df8b64]">
                Without Limits.
              </span>
            </h1>

            {/* Description */}
            <p className="hero-fade hero-delay-3 mt-7 max-w-[600px] text-[17px] leading-[1.65] text-[#596462] sm:text-[18px]">
              Expert physiotherapy care in Bhubaneswar focused on pain
              management, rehabilitation and restoring everyday movement.
            </p>

            {/* =====================================================
                BUTTONS
            ===================================================== */}
            <div className="hero-fade hero-delay-4 mt-9 flex flex-col gap-4 sm:flex-row">

              {/* Primary */}
              <a
                href="#appointment"
                className="group flex h-[62px] items-center justify-center gap-4 rounded-full bg-[#df8b64] px-8 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(223,139,100,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d47f58]"
              >
                <CalendarIcon />

                <span>
                  Book an Appointment
                </span>

                <span className="text-[24px] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary */}
              <a
                href="#contact"
                className="flex h-[62px] items-center justify-center gap-3 rounded-full border border-[#314a46]/35 bg-white/65 px-8 text-[16px] font-semibold text-[#263f3b] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <LocationIcon />

                Get Directions
              </a>
            </div>

            {/* =====================================================
                TRUST STATS
            ===================================================== */}
            <div className="hero-fade hero-delay-5 mt-12 grid max-w-[720px] grid-cols-1 divide-y divide-[#31534b]/10 rounded-2xl bg-white/30 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">

              {/* Rating */}
              <div className="flex items-center gap-4 px-2 py-4 sm:px-4">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#e7ebe7]">
                  <StarIcon />
                </div>

                <div>
                  <p className="text-[14px] font-bold text-[#203b36]">
                    5.0 Google Rating
                  </p>

                  <p className="mt-1 text-[12px] text-[#68736f]">
                    115+ Patient Reviews
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 px-2 py-4 sm:px-5">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#e7ebe7]">
                  <ClockIcon />
                </div>

                <div>
                  <p className="text-[14px] font-bold text-[#203b36]">
                    Open Daily
                  </p>

                  <p className="mt-1 text-[12px] text-[#68736f]">
                    9:00 AM – 8:30 PM
                  </p>
                </div>
              </div>

              {/* Personalized care */}
              <div className="flex items-center gap-4 px-2 py-4 sm:px-5">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#e7ebe7]">
                  <ShieldIcon />
                </div>

                <div>
                  <p className="text-[14px] font-bold text-[#203b36]">
                    Personalized Care
                  </p>

                  <p className="mt-1 text-[12px] text-[#68736f]">
                    For a Pain-Free Life
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}
          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]">

            {/* Green background shape */}
            <div className="hero-green-shape absolute right-[-8%] top-[3%] h-[92%] w-[82%] rounded-tl-[65px] rounded-bl-[65px] rounded-tr-[180px] rounded-br-[20px] bg-[#52776d] sm:right-[-5%]" />

            {/* Main transparent image */}
            <div className="hero-image-wrapper relative z-10 ml-auto w-[92%] max-w-[690px] lg:w-[90%]">
              <Image
                src="/heroimahe.png"
                alt="Physiotherapy treatment at Pain Free Physiotherapy Clinic"
                width={1200}
                height={1000}
                priority
                quality={100}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Floating card */}
            <div className="hero-card absolute bottom-[2%] right-[-2%] z-20 hidden w-[230px] rounded-[32px_0_0_0] bg-[#234a42] px-8 py-8 text-white shadow-[0_20px_50px_rgba(24,59,54,0.18)] sm:block lg:right-[-5%] lg:w-[250px]">
              <p className="text-[15px] leading-[1.6] text-white/95">
                Your Journey
                <br />
                to a Pain-Free Life
                <br />
                Starts Here.
              </p>

              <div className="mt-5 h-[2px] w-[32px] rounded-full bg-[#df8b64]" />
            </div>

            {/* Decorative circle */}
            <div className="hero-circle absolute bottom-[5%] left-[3%] z-20 hidden h-[100px] w-[100px] rounded-full border border-white/50 bg-white/10 backdrop-blur-md lg:block" />
          </div>
        </div>
      </div>

      {/* =========================================================
          DECORATIVE LEAVES
      ========================================================= */}
      <div className="hero-leaves pointer-events-none absolute bottom-[-20px] left-[48%] z-10 hidden opacity-30 lg:block">
        <svg
          width="120"
          height="150"
          viewBox="0 0 120 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 145C45 110 58 65 55 5"
            stroke="#52776D"
            strokeWidth="2"
          />

          <path
            d="M44 105C25 95 17 79 18 62C34 68 45 83 44 105Z"
            fill="#52776D"
            fillOpacity=".15"
          />

          <path
            d="M54 78C73 68 83 53 82 37C67 42 56 56 54 78Z"
            fill="#52776D"
            fillOpacity=".15"
          />

          <path
            d="M35 125C18 117 9 104 10 91C25 96 34 108 35 125Z"
            fill="#52776D"
            fillOpacity=".15"
          />
        </svg>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style jsx>{`
        /* -------------------------------------------------------
           Text entrance
        ------------------------------------------------------- */

        .hero-fade {
          opacity: 0;
          transform: translateY(24px);
          animation: heroFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .hero-delay-1 {
          animation-delay: 0.12s;
        }

        .hero-delay-2 {
          animation-delay: 0.25s;
        }

        .hero-delay-3 {
          animation-delay: 0.38s;
        }

        .hero-delay-4 {
          animation-delay: 0.51s;
        }

        .hero-delay-5 {
          animation-delay: 0.64s;
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* -------------------------------------------------------
           Green shape entrance
        ------------------------------------------------------- */

        .hero-green-shape {
          opacity: 0;
          transform: scale(0.94);
          transform-origin: center;
          animation: greenShapeIn 1s cubic-bezier(0.22, 1, 0.36, 1)
            0.15s forwards;
        }

        @keyframes greenShapeIn {
          from {
            opacity: 0;
            transform: scale(0.94);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* -------------------------------------------------------
           Image entrance
        ------------------------------------------------------- */

        .hero-image-wrapper {
          opacity: 0;
          transform: translateX(35px) scale(0.97);
          animation: heroImageIn 1.1s cubic-bezier(0.22, 1, 0.36, 1)
            0.25s forwards;
        }

        @keyframes heroImageIn {
          from {
            opacity: 0;
            transform: translateX(35px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        /* -------------------------------------------------------
           Gentle image floating after entrance
        ------------------------------------------------------- */

        .hero-image-wrapper {
          animation:
            heroImageIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards,
            heroImageFloat 7s ease-in-out 1.4s infinite;
        }

        @keyframes heroImageFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        /* -------------------------------------------------------
           Floating card
        ------------------------------------------------------- */

        .hero-card {
          opacity: 0;
          transform: translateY(20px);
          animation:
            heroCardIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.75s forwards,
            heroCardFloat 6s ease-in-out 1.7s infinite;
        }

        @keyframes heroCardIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroCardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        /* -------------------------------------------------------
           Decorative circle
        ------------------------------------------------------- */

        .hero-circle {
          opacity: 0;
          animation: circleIn 1s ease 0.9s forwards;
        }

        @keyframes circleIn {
          from {
            opacity: 0;
            transform: scale(0.7);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* -------------------------------------------------------
           Leaves
        ------------------------------------------------------- */

        .hero-leaves {
          animation: leavesFloat 8s ease-in-out infinite;
          transform-origin: bottom center;
        }

        @keyframes leavesFloat {
          0%,
          100% {
            transform: rotate(0deg) translateY(0);
          }

          50% {
            transform: rotate(2deg) translateY(-4px);
          }
        }

        /* -------------------------------------------------------
           Accessibility
        ------------------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          .hero-fade,
          .hero-green-shape,
          .hero-image-wrapper,
          .hero-card,
          .hero-circle,
          .hero-leaves {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =============================================================
   ICONS
============================================================= */

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#294c44]"
    >
      <path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#294c44"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#294c44"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 20 6v5c0 5.2-3.3 8.7-8 10-4.7-1.3-8-4.8-8-10V6l8-3Z" />
      <path d="m8.5 12 2.3 2.3 4.7-5" />
    </svg>
  );
}