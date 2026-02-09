"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Clock, Play, RotateCcw } from "lucide-react";
import { formatTimeElapsed } from "@/utils/progressStorage";

interface ResumeQuizModalProps {
  topicTitle: string;
  currentQuestion: number;
  totalQuestions: number;
  answeredCount: number;
  timestamp: number;
  onContinue: () => void;
  onStartFresh: () => void;
}

export default function ResumeQuizModal({
  topicTitle,
  currentQuestion,
  totalQuestions,
  answeredCount,
  timestamp,
  onContinue,
  onStartFresh,
}: ResumeQuizModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate modal entry
    if (overlayRef.current && modalRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out", delay: 0.1 }
      );
    }
  }, []);

  const progressPercentage = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div ref={overlayRef} className="resume-modal-overlay">
      <div ref={modalRef} className="resume-modal">
        <div className="resume-modal-icon">
          <Clock size={32} />
        </div>

        <h2 className="resume-modal-title">Continue Your Quiz?</h2>
        
        <p className="resume-modal-topic">{topicTitle}</p>

        <div className="resume-modal-progress">
          <div className="resume-progress-bar">
            <div 
              className="resume-progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="resume-progress-stats">
            <span className="resume-progress-text">
              Question {currentQuestion} of {totalQuestions}
            </span>
            <span className="resume-progress-answered">
              {answeredCount} answered
            </span>
          </div>
        </div>

        <p className="resume-modal-time">
          Last attempted {formatTimeElapsed(timestamp)}
        </p>

        <div className="resume-modal-actions">
          <button className="resume-button primary" onClick={onContinue}>
            <Play size={18} />
            Continue
          </button>
          <button className="resume-button secondary" onClick={onStartFresh}>
            <RotateCcw size={18} />
            Start Fresh
          </button>
        </div>
      </div>
    </div>
  );
}
