"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Clock3,
  Car,
  Navigation,
} from "lucide-react";

export default function Location() {
  return (
    <section
      id="contact"
      className="location-section"
    >
      <div className="location-container">

        {/* ================================================
            HEADING
        ================================================= */}

        <motion.h2
          className="location-title"
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
          }}
        >
          Find Us
        </motion.h2>

        {/* ================================================
            CONTENT
        ================================================= */}

        <div className="location-grid">

          {/* ==============================================
              LEFT INFORMATION
          =============================================== */}

          <motion.div
            className="location-info"
            initial={{
              opacity: 0,
              x: -30,
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
            }}
          >

            {/* Address */}

            <div className="location-card">

              <div className="location-card-icon">
                <MapPin size={19} strokeWidth={1.8} />
              </div>

              <div className="location-card-content">

                <h3>
                  Address
                </h3>

                <p>
                  Near Greenwood Palace,
                  <br />
                  Dayanandnagar, Bomikhal,
                  <br />
                  Rasulgarh, Bhubaneswar,
                  <br />
                  Odisha 751010
                </p>

              </div>

            </div>

            {/* Opening Hours */}

            <div className="location-card">

              <div className="location-card-icon">
                <Clock3 size={19} strokeWidth={1.8} />
              </div>

              <div className="location-card-content">

                <h3>
                  Opening Hours
                </h3>

                <p>
                  Monday – Sunday
                  <br />
                  09:00 AM – 08:30 PM
                </p>

              </div>

            </div>

            {/* Parking */}

            <div className="location-card">

              <div className="location-card-icon">
                <Car size={19} strokeWidth={1.8} />
              </div>

              <div className="location-card-content">

                <h3>
                  Getting Here
                </h3>

                <p>
                  Conveniently located in
                  Bomikhal, Rasulgarh,
                  Bhubaneswar.
                </p>

              </div>

            </div>

            {/* Directions */}

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=20.2883458,85.858391"
              target="_blank"
              rel="noopener noreferrer"
              className="location-directions"
            >
              <span>
                Get Directions
              </span>

              <Navigation
                size={17}
                strokeWidth={1.8}
              />
            </a>

          </motion.div>

          {/* ==============================================
              RIGHT MAP
          =============================================== */}

          <motion.div
            className="location-map-wrapper"
            initial={{
              opacity: 0,
              x: 35,
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
            }}
          >

            <div className="location-map">

              <iframe
                title="Pain Free Physiotherapy Clinic Location"
                src="https://www.google.com/maps?q=20.2883458,85.858391&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Custom map marker */}

              <div
                className="location-map-marker"
                aria-hidden="true"
              >
                <span />
              </div>

              {/* Map label */}

              <div className="location-map-label">

                <strong>
                  Pain Free Physiotherapy
                </strong>

                <span>
                  Bhubaneswar, Odisha
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* ================================================
          DECORATIVE SHAPE
      ================================================= */}

      <div
        className="location-decoration"
        aria-hidden="true"
      />

    </section>
  );
}