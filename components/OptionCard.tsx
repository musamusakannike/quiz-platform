"use client";

import { Option } from "@/types/quiz";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface OptionCardProps {
  option: Option;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showResult: boolean;
  correctAnswerId: string;
  onSelect: (optionId: string) => void;
  disabled: boolean;
}

const letterMap = ["A", "B", "C", "D", "E", "F"];

export default function OptionCard({
  option,
  index,
  isSelected,
  isCorrect,
  showResult,
  correctAnswerId,
  onSelect,
  disabled,
}: OptionCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const isThisCorrect = option.id === correctAnswerId;

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: index * 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [index]);

  useEffect(() => {
    if (showResult && cardRef.current) {
      if (isSelected && !isCorrect) {
        // Wrong answer animation - shake
        gsap.to(cardRef.current, {
          keyframes: [
            { x: -10, duration: 0.08 },
            { x: 10, duration: 0.08 },
            { x: -10, duration: 0.08 },
            { x: 10, duration: 0.08 },
            { x: 0, duration: 0.08 }
          ],
          ease: "power2.out",
        });
      } else if (isThisCorrect) {
        // Correct answer animation - pulse
        gsap.to(cardRef.current, {
          keyframes: [
            { scale: 1.03, duration: 0.15 },
            { scale: 1, duration: 0.15 }
          ],
          ease: "power2.out",
        });
      }
    }
  }, [showResult, isSelected, isCorrect, isThisCorrect]);

  const handleClick = () => {
    if (!disabled) {
      // Click animation
      gsap.to(cardRef.current, {
        scale: 0.98,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
      onSelect(option.id);
    }
  };

  const getStateClass = () => {
    if (!showResult) return "";
    if (isThisCorrect) return "option-correct";
    if (isSelected && !isCorrect) return "option-wrong";
    return "option-dimmed";
  };

  return (
    <button
      ref={cardRef}
      onClick={handleClick}
      disabled={disabled}
      className={`option-card ${getStateClass()}`}
      style={{ opacity: 0 }}
    >
      <span className="option-letter">{letterMap[index]}</span>
      <span className="option-text">{option.text}</span>
      
      {showResult && isSelected && !isCorrect && option.whyWrong && (
        <div className="option-explanation wrong">
          <span className="explanation-icon">✗</span>
          <span>{option.whyWrong}</span>
        </div>
      )}
      
      {showResult && isThisCorrect && (
        <div className="option-indicator correct">
          <span>✓</span>
        </div>
      )}
      
      {showResult && isSelected && !isCorrect && (
        <div className="option-indicator wrong">
          <span>✗</span>
        </div>
      )}
    </button>
  );
}
