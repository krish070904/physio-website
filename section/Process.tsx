"use client";

import { useMemo } from "react";
import Carousel, { type CarouselItem } from "../components/Carousel";

const processSteps = [
  {
    number: "01.",
    eyebrow: "BOOK YOUR APPOINTMENT",
    title: "Let’s get started.",
    description:
      "Tell us about your pain, injury, or movement difficulty and schedule your visit with our physiotherapy clinic.",
    button: "Book Appointment",
    tone: "green",
  },
  {
    number: "02.",
    eyebrow: "ASSESSMENT & FIRST TREATMENT",
    title: "Understand. Treat. Improve.",
    description:
      "Your first visit begins with an assessment to understand your condition and movement needs. Based on your assessment, we create a personalized treatment approach and begin your care.",
    tone: "cream",
  },
  {
    number: "03.",
    eyebrow: "PERSONALIZED REHABILITATION",
    title: "Progress at your pace.",
    description:
      "Your treatment evolves with your progress. Through targeted physiotherapy, therapeutic exercises, and guided rehabilitation, we work toward helping you move better and return to your daily activities with confidence.",
    tone: "green",
  },
];

function ProcessCard({ step }: { step: (typeof processSteps)[number] }) {
  return (
    <article className={`pf-process-card pf-process-card--${step.tone}`}>
      <span className="pf-process-card-number" aria-hidden="true">
        {step.number}
      </span>

      <div className="pf-process-card-content">
        <span className="pf-process-card-eyebrow">{step.eyebrow}</span>

        <h3>{step.title}</h3>

        <p>{step.description}</p>

        {step.button && (
          <a href="#contact" className="pf-process-button">
            <span>{step.button}</span>
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      <span className="pf-process-card-mark" aria-hidden="true">
        {step.number}
      </span>
    </article>
  );
}

export default function Process() {
  const carouselItems: CarouselItem[] = useMemo(
    () =>
      processSteps.map((step) => ({
        id: step.number,
        content: <ProcessCard step={step} />,
      })),
    [],
  );

  return (
    <section
      id="process"
      aria-label="Your physiotherapy journey"
      className="pf-process relative overflow-hidden bg-[#f8f6f1]"
    >
      {/* Decorative ambient background orbs */}
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#df8b64]/12 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#52776d]/14 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#dce9e4]/60 blur-3xl" aria-hidden="true" />

      <div className="pf-process-container relative z-10">
        {/* LEFT CONTENT */}
        <div className="pf-process-intro">
          <span className="pf-process-kicker">
            YOUR JOURNEY TO BETTER MOVEMENT
          </span>

          <h2 className="pf-process-title">
            From pain to progress,
            <span> one step at a time.</span>
          </h2>

          <p className="pf-process-description">
            Every recovery journey is different. We take the time to understand
            your condition, create a personalized treatment plan, and guide you
            toward better movement and everyday comfort.
          </p>

          <div className="pf-process-scroll-wrapper">
            <span className="pf-process-scroll-label">
              DRAG OR SWIPE TO EXPLORE
            </span>
            <span className="pf-process-scroll-icon">↔</span>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="pf-process-deck">
          {/* Subtle deck ambient halo */}
          <div className="pf-deck-halo" aria-hidden="true" />

          <Carousel
            items={carouselItems}
            baseWidth={540}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
            loop={false}
            round={false}
          />
        </div>
      </div>

      <style jsx global>{`
        .pf-process {
          --process-green: #173b36;
          --process-green-soft: #668278;
          --process-cream: #e7efeb;
          --process-bg: #f8f6f1;
          --process-peach: #df8b64;
          --process-muted: #6b7280;

          position: relative;
          padding: clamp(65px, 8vw, 120px) 0;
          background: var(--process-bg);
          overflow: hidden;
        }

        .pf-deck-halo {
          position: absolute;
          inset: -15px -10px -25px -10px;
          border-radius: 36px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(220, 233, 228, 0.4) 100%);
          border: 1px solid rgba(23, 59, 54, 0.06);
          box-shadow: 0 20px 45px rgba(23, 59, 54, 0.05);
          pointer-events: none;
          z-index: 0;
        }

        .pf-process-container {
          width: min(1280px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(280px, 0.85fr) minmax(300px, 1.15fr);
          gap: clamp(35px, 5vw, 85px);
          align-items: center;
        }

        .pf-process-intro {
          max-width: 520px;
          width: 100%;
        }

        .pf-process-kicker {
          display: inline-block;
          margin-bottom: 16px;
          color: #52776d;
          font-size: clamp(10px, 1.1vw, 11px);
          font-weight: 800;
          line-height: 1.4;
          letter-spacing: 0.18em;
        }

        .pf-process-title {
          margin: 0;
          color: var(--process-green);
          font-size: clamp(36px, 4.5vw, 68px);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .pf-process-title span {
          color: var(--process-peach);
        }

        .pf-process-description {
          max-width: 500px;
          margin: clamp(18px, 2.5vw, 26px) 0 0;
          color: var(--process-muted);
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.68;
        }

        .pf-process-scroll-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: clamp(18px, 2.5vw, 26px);
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(23, 59, 54, 0.05);
          border: 1px solid rgba(23, 59, 54, 0.1);
        }

        .pf-process-scroll-label {
          color: #626d69;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .pf-process-scroll-icon {
          color: var(--process-peach);
          font-size: 13px;
          line-height: 1;
        }

        .pf-process-deck {
          position: relative;
          width: 100%;
          min-width: 0;
        }

        .pf-process-card {
          width: 100%;
          min-height: clamp(380px, 48vh, 460px);
          overflow: hidden;
          padding: clamp(28px, 4vw, 52px);
          border-radius: clamp(20px, 3vw, 30px);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 24px 60px rgba(23, 59, 54, 0.12),
            0 4px 12px rgba(23, 59, 54, 0.06);
          box-sizing: border-box;
        }

        .pf-process-card--green {
          background: rgba(102, 130, 120, 0.72);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.22);
        }

        .pf-process-card--cream {
          background: rgba(231, 239, 235, 0.75);
          color: var(--process-green);
          border: 1px solid rgba(23, 59, 54, 0.12);
        }

        .pf-process-card::before,
        .pf-process-card::after {
          content: "";
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
        }

        .pf-process-card::before {
          width: 240px;
          height: 240px;
          right: -100px;
          bottom: -130px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .pf-process-card::after {
          width: 130px;
          height: 130px;
          right: 50px;
          bottom: -80px;
          background: rgba(255, 255, 255, 0.05);
        }

        .pf-process-card--cream::before {
          border-color: rgba(23, 59, 54, 0.1);
        }

        .pf-process-card--cream::after {
          background: rgba(23, 59, 54, 0.035);
        }

        .pf-process-card-number {
          position: absolute;
          top: clamp(14px, 2vw, 24px);
          right: clamp(18px, 3vw, 36px);
          color: currentColor;
          opacity: 0.14;
          font-size: clamp(80px, 9vw, 150px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.08em;
          pointer-events: none;
          z-index: 1;
        }

        .pf-process-card-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 580px;
        }

        .pf-process-card-eyebrow {
          display: block;
          max-width: 100%;
          margin-bottom: 14px;
          opacity: 0.8;
          font-size: clamp(9px, 1.1vw, 11px);
          font-weight: 800;
          line-height: 1.4;
          letter-spacing: 0.18em;
        }

        .pf-process-card h3 {
          max-width: 100%;
          margin: 0;
          font-size: clamp(24px, 3.2vw, 42px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .pf-process-card p {
          max-width: 540px;
          margin: clamp(16px, 2vw, 24px) 0 0;
          opacity: 0.88;
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.65;
        }

        .pf-process-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: clamp(22px, 3vw, 32px);
          padding: 12px 24px;
          border-radius: 999px;
          background: var(--process-peach);
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 22px rgba(223, 139, 100, 0.28);
          transition: transform 200ms ease, background 200ms ease, box-shadow 200ms ease;
        }

        .pf-process-button:hover {
          transform: translateY(-2px);
          background: #d47e58;
          box-shadow: 0 14px 28px rgba(223, 139, 100, 0.38);
        }

        .pf-process-button span:last-child {
          font-size: 16px;
          line-height: 1;
        }

        .pf-process-card-mark {
          position: absolute;
          right: 32px;
          bottom: 24px;
          z-index: 1;
          opacity: 0.06;
          font-size: clamp(60px, 7vw, 90px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.08em;
          pointer-events: none;
        }

        /* =====================================================
           RESPONSIVE BREAKPOINTS
        ===================================================== */

        @media (max-width: 1024px) {
          .pf-process-container {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .pf-process-intro {
            max-width: 680px;
          }

          .pf-process-title {
            font-size: clamp(34px, 5.5vw, 48px);
          }
        }

        @media (max-width: 640px) {
          .pf-process {
            padding: 55px 0;
          }

          .pf-process-container {
            width: 90%;
            gap: 32px;
          }

          .pf-process-intro {
            max-width: 100%;
          }

          .pf-process-title {
            font-size: clamp(28px, 7.5vw, 38px);
            line-height: 1.05;
          }

          .pf-process-description {
            font-size: 14px;
            line-height: 1.6;
            margin-top: 14px;
          }

          .pf-deck-halo {
            inset: -8px -4px -14px -4px;
            border-radius: 24px;
          }

          .pf-process-card {
            min-height: auto;
            padding: 26px 20px;
            border-radius: 20px;
          }

          .pf-process-card-content {
            padding-top: 0;
          }

          .pf-process-card-number {
            top: 12px;
            right: 14px;
            font-size: 64px;
            opacity: 0.12;
          }

          .pf-process-card h3 {
            font-size: 22px;
            line-height: 1.15;
          }

          .pf-process-card p {
            font-size: 13.5px;
            line-height: 1.6;
            margin-top: 14px;
          }

          .pf-process-button {
            width: 100%;
            justify-content: center;
            min-height: 48px;
            margin-top: 22px;
          }

          .pf-process-card-mark {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .pf-process-card {
            padding: 22px 16px;
          }

          .pf-process-card h3 {
            font-size: 20px;
          }

          .pf-process-card p {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
