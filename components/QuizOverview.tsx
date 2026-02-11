import React from "react";
import { Option, Question } from "@/types/quiz"; // Assuming Question type is exported
import { CheckCircle, XCircle, SkipForward, Circle } from "lucide-react";

interface QuizOverviewProps {
  questions: Question[]; // Fix: Explicitly use Question[]
  userAnswers: Record<number, string>;
  currentQuestionIndex: number;
  maxReachedIndex: number;
  onQuestionClick: (index: number) => void;
}

export default function QuizOverview({
  questions,
  userAnswers,
  currentQuestionIndex,
  maxReachedIndex,
  onQuestionClick,
}: QuizOverviewProps) {
  const getItemClass = (index: number) => {
    // Basic class
    const classes = ["overview-item"];

    // Status Logic
    const hasAnswer = userAnswers[index] !== undefined;

    if (hasAnswer) {
      const isCorrect = userAnswers[index] === questions[index].correctAnswer;
      classes.push(isCorrect ? "correct" : "wrong");
    } else {
      // No answer
      if (index === currentQuestionIndex) {
        // Current question (no answer yet)
        // We don't necessarily need a color, just the 'current' border
      } else if (index <= maxReachedIndex) {
        classes.push("skipped");
      } else {
        classes.push("unattempted");
      }
    }

    // Current Indicator (always applied effectively on top)
    if (index === currentQuestionIndex) {
      classes.push("current");
    }

    return classes.join(" ");
  };

  const answeredCount = Object.keys(userAnswers).length;

  // Calculate correct answers
  const correctCount = Object.keys(userAnswers).reduce((acc, key) => {
    const idx = parseInt(key);
    return userAnswers[idx] === questions[idx].correctAnswer ? acc + 1 : acc;
  }, 0);

  const wrongCount = answeredCount - correctCount;

  // Skipped: Visited (<= maxReached) but not answered. And not current (unless we count current as skipped if leaving?).
  // Usually, 'Skipped' in stats implies questions we passed by.
  const skippedCount = questions.reduce((acc, _, idx) => {
    if (
      idx <= maxReachedIndex &&
      userAnswers[idx] === undefined &&
      idx !== currentQuestionIndex
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);

  // Remaining: Total - (Correct + Wrong + Skipped + Current(if unanswered))
  // Or simply: Visited indices > maxReachedIndex?
  // Let's explicitly count.
  const remainingCount =
    questions.length -
    (correctCount +
      wrongCount +
      skippedCount +
      (userAnswers[currentQuestionIndex] ? 0 : 1));

  return (
    <aside className="quiz-overview-sidebar">
      <div className="overview-card">
        <h3 className="overview-title">
          Question {currentQuestionIndex + 1} / {questions.length}
        </h3>

        <div className="overview-grid">
          {questions.map((_, index) => (
            <button
              key={index}
              className={getItemClass(index)}
              onClick={() => onQuestionClick(index)}
              disabled={index > maxReachedIndex}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="overview-stats">
          <div className="stat-row">
            <span className="stat-label">
              <CheckCircle size={16} className="text-green-500" /> Correct
            </span>
            <span className="stat-value">{correctCount}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">
              <XCircle size={16} className="text-red-500" /> Wrong
            </span>
            <span className="stat-value">{wrongCount}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">
              <SkipForward size={16} className="text-yellow-500" /> Skipped
            </span>
            <span className="stat-value">{skippedCount}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">
              <Circle size={16} className="text-zinc-500" /> Remaining
            </span>
            <span className="stat-value">
              {Math.max(
                0,
                questions.length -
                  (correctCount + wrongCount + skippedCount) -
                  (userAnswers[currentQuestionIndex] !== undefined ? 1 : 0),
              )}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
