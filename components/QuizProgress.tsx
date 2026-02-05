"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface QuizProgressProps {
  current: number;
  total: number;
  score: number;
}

export default function QuizProgress({ current, total, score }: QuizProgressProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fillRef.current) {
      gsap.to(fillRef.current, {
        width: `${(current / total) * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [current, total]);

  useEffect(() => {
    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={progressRef} className="quiz-progress">
      <div className="progress-header">
        <span className="progress-label">Question {current} of {total}</span>
        <span className="progress-score">Score: {score}</span>
      </div>
      <div className="progress-bar">
        <div ref={fillRef} className="progress-fill" style={{ width: 0 }} />
      </div>
    </div>
  );
}
