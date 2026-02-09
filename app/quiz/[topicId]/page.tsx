"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { getTopicById } from "@/data/quizData";
import { Option } from "@/types/quiz";
import { shuffleOptions } from "@/utils/shuffleOptions";
import { 
  saveQuizProgress, 
  getQuizProgress, 
  clearQuizProgress 
} from "@/utils/progressStorage";
import QuizProgress from "@/components/QuizProgress";
import OptionCard from "@/components/OptionCard";
import QuizResults from "@/components/QuizResults";
import ResumeQuizModal from "@/components/ResumeQuizModal";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, SkipForward } from "lucide-react";
import Link from "next/link";

export default function QuizPage() {
  const params = useParams();
  const topicId = params.topicId as string;
  const topic = getTopicById(topicId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, Option[]>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [savedProgress, setSavedProgress] = useState<{
    currentQuestion: number;
    answeredCount: number;
    timestamp: number;
  } | null>(null);

  // Derived state
  const currentQuestion = topic?.questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex] || null;
  const isCorrect = currentQuestion?.correctAnswer === selectedAnswer;
  const shuffledOptions = shuffledOptionsMap[currentQuestionIndex] || [];
  
  const score = Object.keys(userAnswers).reduce((acc, key) => {
    const idx = parseInt(key);
    const answer = userAnswers[idx];
    const question = topic?.questions[idx];
    if (question && question.correctAnswer === answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const questionRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Handle hydration and check for saved progress
  useEffect(() => {
    setIsMounted(true);
    
    if (topicId) {
      const progress = getQuizProgress(topicId);
      if (progress && progress.userAnswers && Object.keys(progress.userAnswers).length > 0) {
        setSavedProgress({
          currentQuestion: progress.currentQuestionIndex + 1,
          answeredCount: Object.keys(progress.userAnswers).length,
          timestamp: progress.timestamp,
        });
        setShowResumeModal(true);
      }
    }
  }, [topicId]);

  // Initialize shuffled options for current question
  useEffect(() => {
    if (topic && currentQuestion && !shuffledOptionsMap[currentQuestionIndex]) {
      setShuffledOptionsMap(prev => ({
        ...prev,
        [currentQuestionIndex]: shuffleOptions(currentQuestion.options)
      }));
    }
  }, [topic, currentQuestionIndex, currentQuestion, shuffledOptionsMap]);

  // Save progress whenever answers change
  useEffect(() => {
    if (isMounted && topicId && Object.keys(userAnswers).length > 0 && !isComplete) {
      saveQuizProgress(topicId, currentQuestionIndex, userAnswers, shuffledOptionsMap);
    }
  }, [userAnswers, currentQuestionIndex, shuffledOptionsMap, topicId, isMounted, isComplete]);

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

  const handleContinueProgress = useCallback(() => {
    const progress = getQuizProgress(topicId);
    if (progress) {
      setCurrentQuestionIndex(progress.currentQuestionIndex);
      setUserAnswers(progress.userAnswers);
      setShuffledOptionsMap(progress.shuffledOptionsMap);
    }
    setShowResumeModal(false);
  }, [topicId]);

  const handleStartFresh = useCallback(() => {
    clearQuizProgress(topicId);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShuffledOptionsMap({});
    setShowResumeModal(false);
  }, [topicId]);

  const handleSelectAnswer = useCallback((optionId: string) => {
    if (selectedAnswer !== null || !topic) return;

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionId
    }));
  }, [selectedAnswer, topic, currentQuestionIndex]);

  const handleNext = useCallback(() => {
    if (!topic) return;

    if (currentQuestionIndex < topic.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
      clearQuizProgress(topicId);
    }
  }, [topic, currentQuestionIndex, topicId]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [currentQuestionIndex]);

  const handleSkip = useCallback(() => {
    handleNext();
  }, [handleNext]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShuffledOptionsMap({});
    setIsComplete(false);
  }, []);

  if (!topic || !currentQuestion) {
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


  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;

  return (
    <div className="app-container">
      {/* Resume Quiz Modal */}
      {showResumeModal && savedProgress && (
        <ResumeQuizModal
          topicTitle={topic.title}
          currentQuestion={savedProgress.currentQuestion}
          totalQuestions={topic.questions.length}
          answeredCount={savedProgress.answeredCount}
          timestamp={savedProgress.timestamp}
          onContinue={handleContinueProgress}
          onStartFresh={handleStartFresh}
        />
      )}

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

        {/* Navigation Buttons */}
        {!selectedAnswer && (
          <div className="navigation-actions">
            <button 
              className="prev-button" 
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              style={{ visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible' }}
            >
              <ArrowLeft size={18} />
              Previous
            </button>
            
            <div className="skip-button-wrapper">
              <button className="skip-button" onClick={handleSkip}>
                Skip Question
                <SkipForward size={18} />
              </button>
            </div>
          </div>
        )}
        
        {/* If selected answer, we show previous button in a separate flexible container if needed, 
            but standard design is usually to hide navigation when reviewing feedback, 
            except next. However, user might want to go back even after answering? 
            Let's add it above or below feedback? 
            
            The current UI structure has feedback-panel appearing. 
            Inside feedback panel is 'Next'. 
            If I want 'Previous' available even after answering: 
            I should put it outside the condition OR replicate it. 
        */}
        {selectedAnswer && (
           <div className="navigation-actions" style={{ marginBottom: '1rem', justifyContent: 'flex-start' }}>
              <button 
                className="prev-button" 
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                style={{ visibility: currentQuestionIndex === 0 ? 'hidden' : 'visible' }}
              >
                <ArrowLeft size={18} />
                Previous
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

