"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How should I prepare for my first physiotherapy session?",
    answer:
      "Wear comfortable clothing that allows easy movement and access to the area being treated. It is also helpful to bring any relevant medical reports, scans, prescriptions, or previous treatment information if you have them.",
  },
  {
    question: "Will physiotherapy be painful?",
    answer:
      "Physiotherapy is generally designed to improve movement and manage discomfort. Some exercises or treatment techniques may feel challenging, but your treatment is adjusted according to your condition, comfort, and progress.",
  },
  {
    question: "How many physiotherapy sessions will I need?",
    answer:
      "The number of sessions varies from person to person. It depends on your condition, goals, response to treatment, and progress. After your assessment, your physiotherapist can guide you regarding the recommended treatment plan.",
  },
  {
    question: "Do I need to continue exercises at home?",
    answer:
      "Home exercises can be an important part of rehabilitation. Depending on your condition, you may be given simple exercises or movement recommendations to continue between sessions and support your recovery.",
  },
  {
    question: "What conditions can physiotherapy help with?",
    answer:
      "Physiotherapy can support people dealing with many movement and musculoskeletal concerns, including back and neck pain, joint problems, sports injuries, post-surgery rehabilitation, muscle weakness, mobility difficulties, and other functional limitations.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through the appointment option on our website or contact Pain Free Physiotherapy Clinic directly. We will help you find a suitable time for your visit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="faq-section"
    >
      <div className="faq-container">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="faq-heading"
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
          <span className="faq-eyebrow">
            HAVE QUESTIONS?
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Find answers to some of the common questions
            about physiotherapy, treatment, and your visit.
          </p>
        </motion.div>

        {/* =================================================
            FAQ LIST
        ================================================= */}

        <motion.div
          className="faq-list"
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`faq-item ${
                  isOpen ? "is-open" : ""
                }`}
              >
                {/* Question */}

                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>
                    {faq.question}
                  </span>

                  <span
                    className="faq-icon"
                    aria-hidden="true"
                  >
                    <Plus
                      size={18}
                      strokeWidth={1.6}
                    />
                  </span>
                </button>

                {/* Answer */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      className="faq-answer-wrapper"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                    >
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <motion.div
          className="faq-bottom"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <span>
            Still have questions?
          </span>

          <a href="#contact">
            Contact Us
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}