"use client";

import { motion } from "motion/react";

interface RecoveryCTAProps {
  id?: string;
  bgImage?: string;
}

export default function RecoveryCTA({
  id = "recovery",
  bgImage = "/service5.png",
}: RecoveryCTAProps) {
  return (
    <section
      id={id}
      className="recovery-cta"
      aria-label="Start your physiotherapy journey"
    >
      {/* Blurred background image specific to Recovery CTA */}
      {bgImage && (
        <div className="recovery-cta-bg" aria-hidden="true">
          <img src={bgImage} alt="" className="recovery-cta-bg-img" />
          <div className="recovery-cta-overlay" />
        </div>
      )}

      {/* Subtle ambient light glows for glassmorphism depth */}
      <div className="recovery-ambient-glow recovery-glow-left" aria-hidden="true" />
      <div className="recovery-ambient-glow recovery-glow-right" aria-hidden="true" />

      <div className="recovery-cta-container">
        <motion.div
          className="recovery-cta-panel"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="recovery-cta-badge">
            <span className="recovery-badge-dot" />
            <span className="recovery-cta-eyebrow">
              YOUR RECOVERY STARTS HERE
            </span>
          </div>

          <h2>
            Personalized care.
            <br />
            <span className="recovery-gradient-text">Meaningful progress.</span>
          </h2>

          <p>
            Every body and every condition is different. We take the time to
            understand your needs and provide a personalized physiotherapy approach
            focused on reducing discomfort, improving movement, and supporting
            your recovery.
          </p>

          <div className="recovery-cta-actions">
            <a
              href="#contact"
              className="recovery-primary-button"
            >
              <span>Book Appointment</span>
              <span className="recovery-button-arrow">→</span>
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=20.2883458,85.858391"
              target="_blank"
              rel="noopener noreferrer"
              className="recovery-secondary-button"
            >
              <span>Find Our Clinic</span>
              <span className="recovery-button-arrow">↗</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="recovery-cta-side"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          <div className="recovery-side-card">
            <span className="recovery-side-tag">PAIN FREE</span>

            <strong>
              MOVE
              <br />
              BETTER.
            </strong>

            <div className="recovery-side-line" />

            <small>
              PHYSIOTHERAPY
              <br />
              & REHABILITATION
            </small>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
}
