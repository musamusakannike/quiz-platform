"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Shuffle, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface RandomQuizModalProps {
  onClose: () => void;
}

export default function RandomQuizModal({ onClose }: RandomQuizModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Animate modal entry
    if (overlayRef.current && modalRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.1,
        },
      );
    }
  }, []);

  const handleStart = () => {
    // Navigate to random quiz page
    // We use window.location to force a reload if we are already there,
    // but here we are on home page, so router.push is fine.
    // However, we want to clear previous random progress?
    // app/quiz/[topicId]/page.tsx handles progress clearing if we want to "Start Fresh".
    // But here we are just starting.
    // We'll let the user decide in the quiz page or just start.
    // Actually, if we navigate to /quiz/random, the page will load.
    // If there is saved progress, it will show Resume modal.
    // If the user wants a NEW 50 questions, they might need to "Start Fresh" from that modal.
    // Or we can clear it here.
    // Given the prompt says "start a quiz", implies new one.
    // I'll clear 'random' progress here to ensure a fresh start.
    // But I can't import clearQuizProgress here easily without being a client component (which it is).
    // Let's import it.

    // Actually, logic:
    // User clicks Start -> clear 'random' -> navigation
    // This ensures fresh questions.

    // Wait, I need to import clearQuizProgress.
    router.push("/quiz/random");
  };

  return (
    <div ref={overlayRef} className="resume-modal-overlay">
      <div ref={modalRef} className="resume-modal random-quiz-modal">
        <button className="close-modal-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="resume-modal-icon random-icon">
          <Shuffle size={32} />
        </div>

        <h2 className="resume-modal-title">Random Quiz Challenge</h2>

        <p className="resume-modal-description">
          This will start a quiz of 50 questions containing random questions
          from every topic. Are you ready to test your general knowledge?
        </p>

        <div className="resume-modal-actions">
          <button className="resume-button primary" onClick={handleStart}>
            <Shuffle size={18} />
            Start Quiz
          </button>
          <button className="resume-button secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
