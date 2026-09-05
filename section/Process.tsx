"use client";

import { useMemo } from "react";
import Carousel, { type CarouselItem } from "../components/Carousel"; // adjust path to wherever Carousel.tsx lives

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
      <span className="pf-process-card-number">{step.number}</span>

      <div className="pf-process-card-content">
        <span className="pf-process-card-eyebrow">{step.eyebrow}</span>

        <h3>{step.title}</h3>

        <p>{step.description}</p>

        {step.button && (
          <a href="#contact" className="pf-process-button">
            {step.button}
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
      className="pf-process"
    >
      <div className="pf-process-container">
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

          <span className="pf-process-scroll-label">
            DRAG OR SWIPE TO EXPLORE
          </span>
        </div>

        {/* CAROUSEL */}
        <div className="pf-process-deck">
          <Carousel
            items={carouselItems}
            baseWidth={520}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
            loop={false}
            round={false}
          />
        </div>
      </div>

      {/*
        NOTE: this is "jsx global", not scoped "jsx". Card markup (ProcessCard)
        is rendered from inside <Carousel />, a different component — scoped
        styled-jsx only tags elements written directly in *this* component's
        own return, so a scoped block would never reach Carousel's render
        tree. Global avoids that; class names are prefixed "pf-process-" to
        stay unique app-wide.
      */}
      <style jsx global>{`
        .pf-process {
          --process-green: #173b36;
          --process-green-soft: #668278;
          --process-cream: #e7efeb;
          --process-bg: #f8f7f4;
          --process-peach: #df8b64;
          --process-muted: #6b7280;

          position: relative;
          padding: 100px 0;
          background: var(--process-bg);
        }

        .pf-process-container {
          width: min(1280px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(280px, 0.82fr) minmax(480px, 1.18fr);
          gap: clamp(45px, 7vw, 100px);
          align-items: center;
        }

        .pf-process-intro {
          max-width: 520px;
        }

        .pf-process-kicker {
          display: inline-block;
          margin-bottom: 20px;
          color: #52776d;
          font-size: 11px;
          font-weight: 800;
          line-height: 1.4;
          letter-spacing: 0.18em;
        }

        .pf-process-title {
          margin: 0;
          color: var(--process-green);
          font-size: clamp(44px, 5vw, 72px);
          font-weight: 700;
          line-height: 0.99;
          letter-spacing: -0.055em;
        }

        .pf-process-title span {
          color: var(--process-peach);
        }

        .pf-process-description {
          max-width: 500px;
          margin: 28px 0 0;
          color: var(--process-muted);
          font-size: 16px;
          line-height: 1.65;
        }

        .pf-process-scroll-label {
          display: block;
          margin-top: 24px;
          color: #8b9490;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .pf-process-deck {
          position: relative;
          width: 100%;
        }

        .pf-process-card {
          width: 100%;
          height: 100%;
          min-height: 480px;
          overflow: hidden;
          padding: clamp(38px, 5vw, 62px);
          border-radius: 30px;
          position: relative;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 28px 65px rgba(23, 59, 54, 0.13),
            0 5px 14px rgba(23, 59, 54, 0.08);
        }

        .pf-process-card--green {
          background: rgba(102, 130, 120, 0.65);
          color: #fff;
        }

        .pf-process-card--cream {
          background: rgba(231, 239, 235, 0.65);
          color: var(--process-green);
        }

        .pf-process-card::before,
        .pf-process-card::after {
          content: "";
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
        }

        .pf-process-card::before {
          width: 260px;
          height: 260px;
          right: -120px;
          bottom: -150px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .pf-process-card::after {
          width: 150px;
          height: 150px;
          right: 60px;
          bottom: -90px;
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
          top: 22px;
          right: 38px;
          color: currentColor;
          opacity: 0.12;
          font-size: clamp(105px, 11vw, 175px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.08em;
          pointer-events: none;
        }

        .pf-process-card-content {
          position: relative;
          z-index: 2;
          max-width: 640px;
          padding-top: 32px;
        }

        .pf-process-card-eyebrow {
          display: block;
          max-width: 360px;
          margin-bottom: 20px;
          opacity: 0.72;
          font-size: 11px;
          font-weight: 800;
          line-height: 1.45;
          letter-spacing: 0.18em;
        }

        .pf-process-card h3 {
          max-width: 600px;
          margin: 0;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.05em;
        }

        .pf-process-card p {
          max-width: 580px;
          margin: 26px 0 0;
          opacity: 0.82;
          font-size: 16px;
          line-height: 1.65;
        }

        .pf-process-button {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-top: 30px;
          padding: 14px 23px;
          border-radius: 999px;
          background: var(--process-peach);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 200ms ease,
            background 200ms ease;
        }

        .pf-process-button:hover {
          transform: translateY(-2px);
          background: #d47e58;
        }

        .pf-process-button span {
          font-size: 18px;
          line-height: 1;
        }

        .pf-process-card-mark {
          position: absolute;
          right: 48px;
          bottom: 34px;
          z-index: 1;
          opacity: 0.07;
          font-size: 92px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.08em;
          pointer-events: none;
        }

        @media (max-width: 1050px) {
          .pf-process-container {
            grid-template-columns: minmax(250px, 0.72fr) minmax(420px, 1.28fr);
            gap: 40px;
          }

          .pf-process-title {
            font-size: 48px;
          }
        }

        @media (max-width: 800px) {
          .pf-process-container {
            width: 90%;
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .pf-process-title {
            font-size: clamp(38px, 8vw, 50px);
          }

          .pf-process-card {
            padding: 30px;
            border-radius: 23px;
            min-height: 400px;
          }

          .pf-process-card h3 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}
