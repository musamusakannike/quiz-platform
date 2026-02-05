import TopicCard from "@/components/TopicCard";
import { getAllTopics } from "@/data/quizData";

export default function Home() {
  const topics = getAllTopics();

  return (
    <div className="app-container">
      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Quiz Master</h1>
          <p className="page-subtitle">
            Test your knowledge across different topics
          </p>
        </header>

        <div className="topics-grid">
          {topics.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
