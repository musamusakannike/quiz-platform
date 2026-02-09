import { SavedQuizProgress, Option } from "@/types/quiz";

const STORAGE_KEY_PREFIX = "quiz_progress_";

/**
 * Get the localStorage key for a specific topic
 */
function getStorageKey(topicId: string): string {
  return `${STORAGE_KEY_PREFIX}${topicId}`;
}

/**
 * Save quiz progress to localStorage
 */
export function saveQuizProgress(
  topicId: string,
  currentQuestionIndex: number,
  userAnswers: Record<number, string>,
  shuffledOptionsMap: Record<number, Option[]>,
): void {
  const progress: SavedQuizProgress = {
    topicId,
    currentQuestionIndex,
    userAnswers,
    shuffledOptionsMap,
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem(getStorageKey(topicId), JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to save quiz progress:", error);
  }
}

/**
 * Get saved quiz progress from localStorage
 */
export function getQuizProgress(topicId: string): SavedQuizProgress | null {
  try {
    const data = localStorage.getItem(getStorageKey(topicId));
    if (!data) return null;
    return JSON.parse(data) as SavedQuizProgress;
  } catch (error) {
    console.error("Failed to retrieve quiz progress:", error);
    return null;
  }
}

/**
 * Check if there is saved progress for a quiz
 */
export function hasQuizProgress(topicId: string): boolean {
  try {
    return localStorage.getItem(getStorageKey(topicId)) !== null;
  } catch (error) {
    return false;
  }
}

/**
 * Clear saved progress for a quiz
 */
export function clearQuizProgress(topicId: string): void {
  try {
    localStorage.removeItem(getStorageKey(topicId));
  } catch (error) {
    console.error("Failed to clear quiz progress:", error);
  }
}

/**
 * Format time elapsed since timestamp
 */
export function formatTimeElapsed(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
}
