"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutDoc() {
  return (
    <section
      id="about"
      className="about-doctor"
    >
      <div className="about-doctor-container">

        {/* =================================================
            TOP HEADING
        ================================================= */}

        <motion.div
          className="about-doctor-heading"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>
            MEET YOUR PHYSIOTHERAPIST
          </span>

          <h2>
            Dr. Bhagrab Sahoo
          </h2>

          <p>
            Senior Physiotherapist Consultant
          </p>
        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="about-doctor-content">

          {/* -----------------------------------------------
              LEFT — TEXT
          ----------------------------------------------- */}

          <motion.div
            className="about-doctor-info"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Mission */}

            <div className="doctor-info-block">

              <h3>
                My Approach
              </h3>

              <p>
                Every patient is different. My approach begins
                with understanding your condition, your movement,
                and how your symptoms affect your everyday life.
              </p>

            </div>

            {/* Care philosophy */}

            <div className="doctor-info-block">

              <h3>
                Patient-Focused Care
              </h3>

              <p>
                At Pain Free Physiotherapy Clinic, treatment is
                planned around the individual needs of each
                patient, with a focus on improving movement,
                managing discomfort, and supporting recovery.
              </p>

            </div>

            {/* Areas */}

            <div className="doctor-info-block">

              <h3>
                Areas of Care
              </h3>

              <ul className="doctor-care-list">

                <li>
                  <span />
                  Pain management
                </li>

                <li>
                  <span />
                  Orthopedic rehabilitation
                </li>

                <li>
                  <span />
                  Post-surgery rehabilitation
                </li>

                <li>
                  <span />
                  Sports injury rehabilitation
                </li>

                <li>
                  <span />
                  Mobility & functional rehabilitation
                </li>

              </ul>

            </div>

            {/* Small signature */}

            <div className="doctor-signature">
              <span>
                Dr. Bhagrab Sahoo
              </span>

              <small>
                Senior Physiotherapist Consultant
              </small>
            </div>

          </motion.div>

          {/* -----------------------------------------------
              RIGHT — IMAGE
          ----------------------------------------------- */}

          <motion.div
            className="about-doctor-visual"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Green background shape */}

            <div
              className="doctor-image-back"
              aria-hidden="true"
            />

            {/* Image card */}

            <div className="doctor-image-card">

              <Image
                src="/doc.png"
                alt="Dr. Bhagrab Sahoo, Senior Physiotherapist Consultant"
                fill
                priority={false}
                sizes="(max-width: 700px) 90vw, 55vw"
                className="doctor-image"
              />

            </div>

            {/* Floating label */}

            <div className="doctor-image-badge">

              <span>
                PAIN FREE
              </span>

              <strong>
                Better
                <br />
                movement.
              </strong>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Decorative quotation marks */}

      <div
        className="about-doctor-quotes"
        aria-hidden="true"
      >
        “
      </div>

      <div
        className="about-doctor-circle"
        aria-hidden="true"
      />

    </section>
  );
}