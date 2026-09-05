"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  ArrowUpRight,
  Check,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      {/* Decorative shapes */}

      <div
        className="contact-decoration contact-decoration-one"
        aria-hidden="true"
      />

      <div
        className="contact-decoration contact-decoration-two"
        aria-hidden="true"
      />

      <div className="contact-container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          className="contact-intro"
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

          <span className="contact-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Let&apos;s get
            <br />
            <span>you moving.</span>
          </h2>

          <p className="contact-description">
            Have a question about your pain, recovery,
            or physiotherapy treatment? Get in touch with
            Pain Free Physiotherapy Clinic and take the
            next step toward better movement.
          </p>

          {/* Contact details */}

          <div className="contact-details">

            {/* Phone */}

            <a
              href="tel:+917789902773"
              className="contact-detail"
            >
              <div className="contact-detail-icon">
                <Phone
                  size={18}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>
                  Call Us
                </span>

                <strong>
                  +91 77899 02773
                </strong>
              </div>

              <ArrowUpRight
                className="contact-detail-arrow"
                size={16}
              />
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/917789902773"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <div className="contact-detail-icon">
                <MessageCircle
                  size={18}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>
                  WhatsApp
                </span>

                <strong>
                  Chat with us
                </strong>
              </div>

              <ArrowUpRight
                className="contact-detail-arrow"
                size={16}
              />
            </a>

            {/* Location */}

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=20.2883458,85.858391"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <div className="contact-detail-icon">
                <MapPin
                  size={18}
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <span>
                  Visit Us
                </span>

                <strong>
                  Bomikhal, Bhubaneswar
                </strong>
              </div>

              <ArrowUpRight
                className="contact-detail-arrow"
                size={16}
              />
            </a>

          </div>

          {/* Opening hours */}

          <div className="contact-hours">

            <Clock3
              size={16}
              strokeWidth={1.8}
            />

            <div>
              <span>
                OPEN DAILY
              </span>

              <strong>
                09:00 AM — 08:30 PM
              </strong>
            </div>

          </div>

        </motion.div>

        {/* =================================================
            RIGHT SIDE — FORM
        ================================================= */}

        <motion.div
          className="contact-form-wrapper"
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
            duration: 0.85,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="contact-form-card">

            {/* Form heading */}

            <div className="contact-form-heading">

              <span>
                APPOINTMENT REQUEST
              </span>

              <h3>
                Tell us how we can help.
              </h3>

              <p>
                Fill in your details and we&apos;ll help
                you with the next step.
              </p>

            </div>

            {submitted ? (

              /* ==========================================
                 SUCCESS STATE
              =========================================== */

              <motion.div
                className="contact-success"
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
              >

                <div className="contact-success-icon">
                  <Check
                    size={25}
                    strokeWidth={2}
                  />
                </div>

                <h3>
                  Thank you.
                </h3>

                <p>
                  Your request has been received.
                  We&apos;ll get back to you shortly.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                >
                  Send another request
                </button>

              </motion.div>

            ) : (

              /* ==========================================
                 FORM
              =========================================== */

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* Name + Phone */}

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                  </div>

                  <div className="contact-field">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      required
                    />

                  </div>

                </div>

                {/* Email */}

                <div className="contact-field">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />

                </div>

                {/* Concern */}

                <div className="contact-field">

                  <label htmlFor="concern">
                    What can we help with?
                  </label>

                  <select
                    id="concern"
                    name="concern"
                    defaultValue=""
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select an option
                    </option>

                    <option value="pain">
                      Pain Relief & Management
                    </option>

                    <option value="orthopedic">
                      Orthopedic Physiotherapy
                    </option>

                    <option value="rehabilitation">
                      Rehabilitation
                    </option>

                    <option value="sports">
                      Sports Injury
                    </option>

                    <option value="knee">
                      Knee Rehabilitation
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>

                </div>

                {/* Message */}

                <div className="contact-field">

                  <label htmlFor="message">
                    Tell us a little more
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe your concern..."
                    rows={4}
                  />

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>
                    Request an Appointment
                  </span>

                  <span className="contact-submit-arrow">
                    →
                  </span>
                </button>

                <p className="contact-form-note">
                  We&apos;ll use your details only to
                  respond to your enquiry.
                </p>

              </form>

            )}

          </div>

        </motion.div>

      </div>

      {/* =================================================
          BOTTOM BRAND STRIP
      ================================================= */}

      <div className="contact-bottom">

        <span>
          PAIN FREE PHYSIOTHERAPY CLINIC
        </span>

        <span className="contact-bottom-line" />

        <span>
          BHUBANESWAR • ODISHA
        </span>

      </div>

    </section>
  );
}