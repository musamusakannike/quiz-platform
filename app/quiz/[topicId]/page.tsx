"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { getTopicById } from "@/data/quizData";
import { Option, Question } from "@/types/quiz";
import { shuffleOptions } from "@/utils/shuffleOptions";
import QuizProgress from "@/components/QuizProgress";
import OptionCard from "@/components/OptionCard";
import QuizResults from "@/components/QuizResults";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, SkipForward } from "lucide-react";
import Link from "next/link";

export default function QuizPage() {
  const params = useParams();
  const topicId = params.topicId as string;
  const topic = getTopicById(topicId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<Option[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const questionRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize shuffled options for current question
  useEffect(() => {
    if (topic && topic.questions[currentQuestionIndex]) {
      setShuffledOptions(shuffleOptions(topic.questions[currentQuestionIndex].options));
    }
  }, [topic, currentQuestionIndex]);

  // Animate question on change
  useEffect(() => {
    if (questionRef.current) {
      gsap.fromTo(
        questionRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentQuestionIndex]);

  // Animate feedback panel
  useEffect(() => {
    if (selectedAnswer && feedbackRef.current) {
      gsap.fromTo(
        feedbackRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [selectedAnswer]);

  const handleSelectAnswer = useCallback((optionId: string) => {
    if (selectedAnswer !== null || !topic) return;

    const currentQuestion = topic.questions[currentQuestionIndex];
    const correct = optionId === currentQuestion.correctAnswer;

    setSelectedAnswer(optionId);
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
    }
  }, [selectedAnswer, topic, currentQuestionIndex]);

  const handleNext = useCallback(() => {
    if (!topic) return;

    setSelectedAnswer(null);

    if (currentQuestionIndex < topic.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [topic, currentQuestionIndex]);

  const handleSkip = useCallback(() => {
    if (!topic) return;

    // Treat skip as not answering correctly (score doesn't increase)
    setSelectedAnswer(null);

    if (currentQuestionIndex < topic.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [topic, currentQuestionIndex]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsComplete(false);
  }, []);

  if (!topic) {
    return (
      <div className="app-container">
        <main className="main-content centered">
          <h1 className="error-title">Topic not found</h1>
          <Link href="/" className="back-link">
            ← Back to Topics
          </Link>
        </main>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="app-container">
        <QuizResults
          score={score}
          total={topic.questions.length}
          topicTitle={topic.title}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  const currentQuestion: Question = topic.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;

  return (
    <div className="app-container">
      <main className="quiz-main">
        <header className="quiz-header">
          <Link href="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back</span>
          </Link>
          <h1 className="quiz-topic-title">{topic.title}</h1>
        </header>

        <QuizProgress
          current={currentQuestionIndex + 1}
          total={topic.questions.length}
          score={score}
        />

        <div ref={questionRef} className="question-container">
          <h2 className="question-text">{currentQuestion.question}</h2>
        </div>

        <div className="options-container">
          {isMounted && shuffledOptions.map((option, index) => (
            <OptionCard
              key={`${currentQuestionIndex}-${option.id}`}
              option={option}
              index={index}
              isSelected={selectedAnswer === option.id}
              isCorrect={isCorrect}
              showResult={selectedAnswer !== null}
              correctAnswerId={currentQuestion.correctAnswer}
              onSelect={handleSelectAnswer}
              disabled={selectedAnswer !== null}
            />
          ))}
        </div>

        {/* Skip Button */}
        {!selectedAnswer && (
          <div className="skip-container">
            <button className="skip-button" onClick={handleSkip}>
              Skip Question
              <SkipForward size={18} />
            </button>
          </div>
        )}

        {/* Inline Feedback Panel */}
        {selectedAnswer && (
          <div ref={feedbackRef} className={`feedback-panel ${isCorrect ? "correct" : "wrong"}`}>
            <div className="feedback-panel-header">
              {isCorrect ? (
                <CheckCircle size={24} className="feedback-icon-correct" />
              ) : (
                <XCircle size={24} className="feedback-icon-wrong" />
              )}
              <span className="feedback-panel-title">
                {isCorrect ? "Correct!" : "Incorrect"}
              </span>
            </div>
            
            {currentQuestion.explanation && (
              <p className="feedback-panel-explanation">{currentQuestion.explanation}</p>
            )}
            
            <button className="next-button" onClick={handleNext}>
              {isLastQuestion ? "See Results" : "Next Question"}
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

