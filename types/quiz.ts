export interface Option {
  id: string;
  text: string;
  whyWrong?: string; // Optional explanation for why this option is incorrect
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
  correctAnswer: string; // The ID of the correct option
  explanation?: string; // Optional explanation for the correct answer
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
  color: string; // Accent color for the topic card
  questions: Question[];
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  showFeedback: boolean;
  isComplete: boolean;
  shuffledOptions: Option[];
}

export interface SavedQuizProgress {
  topicId: string;
  currentQuestionIndex: number;
  userAnswers: Record<number, string>;
  shuffledOptionsMap: Record<number, Option[]>;
  questionIds?: string[];
  timestamp: number;
}
