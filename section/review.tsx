"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface Review {
  name: string;
  age: string;
  treatment: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Rahul",
    age: "38 years",
    treatment: "Back Pain",
    text: "I was having difficulty with my back pain and everyday movement. The treatment approach was explained clearly and the exercises were easy to understand. The overall experience was comfortable and professional.",
  },
  {
    name: "Priya",
    age: "31 years",
    treatment: "Knee Rehabilitation",
    text: "The sessions were focused on understanding my problem rather than simply treating the symptoms. I received clear guidance throughout my rehabilitation and felt more confident with my movement as the sessions progressed.",
  },
  {
    name: "Amit",
    age: "42 years",
    treatment: "Neck & Shoulder Pain",
    text: "I appreciated the personal attention during my sessions. The exercises and treatment were explained properly, and I was given practical guidance that I could follow in my daily routine.",
  },
  {
    name: "Sneha",
    age: "29 years",
    treatment: "Sports Rehabilitation",
    text: "The rehabilitation program was structured and easy to follow. Each session felt purposeful and the exercises were adjusted according to my progress. A very positive physiotherapy experience.",
  },
  {
    name: "Sanjay",
    age: "51 years",
    treatment: "Mobility & Rehabilitation",
    text: "The approach was patient and professional from the beginning. I was given time to explain my concerns and received a treatment plan that was easy to understand and follow.",
  },
  {
    name: "Neha",
    age: "35 years",
    treatment: "Pain Management",
    text: "The clinic environment was welcoming and the treatment sessions were handled with care. I especially liked the clear explanation of the exercises and how they related to my recovery.",
  },
];

export default function Review() {
  const [current, setCurrent] = useState(0);

  const totalPages = Math.ceil(reviews.length / 2);

  const currentPage = Math.floor(current / 2);

  const visibleReviews = reviews.slice(
    currentPage * 2,
    currentPage * 2 + 2
  );

  const nextReview = () => {
    setCurrent((prev) => {
      const nextPage = (Math.floor(prev / 2) + 1) % totalPages;
      return nextPage * 2;
    });
  };

  const previousReview = () => {
    setCurrent((prev) => {
      const previousPage =
        (Math.floor(prev / 2) - 1 + totalPages) %
        totalPages;

      return previousPage * 2;
    });
  };

  const goToPage = (page: number) => {
    setCurrent(page * 2);
  };

  return (
    <section
      id="reviews"
      className="reviews-section"
    >
      <div className="reviews-container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="reviews-intro">

          {/* Decorative quotation mark */}

          <div
            className="reviews-quote-mark"
            aria-hidden="true"
          >
            “
          </div>

          <div className="reviews-intro-content">

            <span className="reviews-eyebrow">
              PATIENT EXPERIENCES
            </span>

            <h2>
              What our
              <br />
              <span>patients say.</span>
            </h2>

            <p>
              Every recovery journey is different.
              Here are some experiences from people
              who have visited our physiotherapy clinic.
            </p>

          </div>

        </div>

        {/* =================================================
            RIGHT SIDE — REVIEWS
        ================================================= */}

        <div className="reviews-content">

          <div className="reviews-grid">

            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={currentPage}
                className="reviews-grid-inner"
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {visibleReviews.map(
                  (review, index) => (
                    <article
                      key={`${currentPage}-${index}`}
                      className="review-card"
                    >

                      {/* Stars */}

                      <div
                        className="review-stars"
                        aria-label="5 out of 5 stars"
                      >
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>

                      {/* Review */}

                      <p className="review-text">
                        {review.text}
                      </p>

                      {/* Patient */}

                      <div className="review-author">

                        <div className="review-avatar">
                          {review.name.charAt(0)}
                        </div>

                        <div>
                          <strong>
                            {review.name}
                          </strong>

                          <span>
                            {review.age}
                          </span>

                          <small>
                            {review.treatment}
                          </small>
                        </div>

                      </div>

                    </article>
                  )
                )}

              </motion.div>
            </AnimatePresence>

          </div>

          {/* =================================================
              CONTROLS
          ================================================= */}

          <div className="reviews-controls">

            {/* Dots */}

            <div className="reviews-dots">

              {Array.from({
                length: totalPages,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to review page ${
                    index + 1
                  }`}
                  aria-current={
                    currentPage === index
                      ? "true"
                      : undefined
                  }
                  className={`reviews-dot ${
                    currentPage === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    goToPage(index)
                  }
                />
              ))}

            </div>

            {/* Arrows */}

            <div className="reviews-arrows">

              <button
                type="button"
                className="reviews-arrow"
                onClick={previousReview}
                aria-label="Previous reviews"
              >
                ←
              </button>

              <button
                type="button"
                className="reviews-arrow"
                onClick={nextReview}
                aria-label="Next reviews"
              >
                →
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}