"use client";

import { useState } from "react";
import TopicCard from "@/components/TopicCard";
import { getAllTopics } from "@/data/quizData";
import { Shuffle } from "lucide-react";
import RandomQuizModal from "@/components/RandomQuizModal";

export default function Home() {
  const topics = getAllTopics();
  const [showRandomModal, setShowRandomModal] = useState(false);

  return (
    <div className="app-container">
      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">ENT 211 QUIZ</h1>
          <p className="page-subtitle">
            Test your knowledge across different topics
          </p>
        </header>

        <div className="topics-grid">
          {topics.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>

        <button
          className="fab-button"
          onClick={() => setShowRandomModal(true)}
          aria-label="Start Random Quiz"
          title="Start 50 Question Random Quiz"
        >
          <Shuffle size={24} />
        </button>

        {showRandomModal && (
          <RandomQuizModal onClose={() => setShowRandomModal(false)} />
        )}
      </main>
    </div>
  );
}
