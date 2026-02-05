"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface FeedbackModalProps {
  isCorrect: boolean;
  explanation?: string;
  onContinue: () => void;
}

export default function FeedbackModal({
  isCorrect,
  explanation,
  onContinue,
}: FeedbackModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current && contentRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, delay: 0.1, ease: "back.out(1.7)" }
      );
    }
  }, []);

  return (
    <div ref={modalRef} className="feedback-overlay" onClick={onContinue}>
      <div
        ref={contentRef}
        className={`feedback-modal ${isCorrect ? "correct" : "wrong"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="feedback-icon">
          {isCorrect ? (
            <span className="icon-correct">✓</span>
          ) : (
            <span className="icon-wrong">✗</span>
          )}
        </div>
        <h3 className="feedback-title">
          {isCorrect ? "Correct!" : "Incorrect"}
        </h3>
        {explanation && (
          <p className="feedback-explanation">{explanation}</p>
        )}
        <button className="feedback-button" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
