"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface QuizResultsProps {
  score: number;
  total: number;
  topicTitle: string;
  onRestart: () => void;
}

export default function QuizResults({
  score,
  total,
  topicTitle,
  onRestart,
}: QuizResultsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLSpanElement>(null);
  const [displayScore, setDisplayScore] = useState(0);

  const percentage = Math.round((score / total) * 100);
  const isGood = percentage >= 70;
  const isPerfect = percentage === 100;

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" },
      );
    }

    // Animate score counting up
    const duration = 1.5;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplayScore(Math.round(eased * score));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [score]);

  const getMessage = () => {
    if (isPerfect) return "Perfect Score! You're a master!";
    if (percentage >= 80) return "Excellent! You really know your stuff!";
    if (percentage >= 60) return "Good job! Keep learning!";
    if (percentage >= 40) return "Not bad! Room for improvement.";
    return "Keep practicing! You'll get better!";
  };

  return (
    <div ref={containerRef} className="results-container">
      <div className="results-card">
        <div className="results-header">
          <h2 className="results-title">Quiz Complete!</h2>
          <p className="results-topic">{topicTitle}</p>
        </div>

        <div
          className={`results-score-circle ${isGood ? "good" : "needs-work"}`}
        >
          <span ref={scoreRef} className="score-number">
            {displayScore}
          </span>
          <span className="score-separator">/</span>
          <span className="score-total">{total}</span>
        </div>

        <div className="results-percentage">{percentage}%</div>

        <p className="results-message">{getMessage()}</p>

        <div className="results-actions">
          <button onClick={onRestart} className="results-button primary">
            Play Again
          </button>
          <Link href="/" className="results-button secondary">
            Choose Topic
          </Link>
        </div>

        <div className="powered-by">
          Powered by{" "}
          <a
            href="https://codiac.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            codiac
          </a>
        </div>
      </div>
    </div>
  );
}
