"use client";

import { Topic } from "@/types/quiz";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import * as LucideIcons from "lucide-react";

interface TopicCardProps {
  topic: Topic;
  index: number;
}

export default function TopicCard({ topic, index }: TopicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Get the icon dynamically from lucide-react
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[topic.icon] || LucideIcons.HelpCircle;

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power3.out",
        }
      );
    }
  }, [index]);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.02,
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <Link href={`/quiz/${topic.id}`}>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="topic-card group"
        style={{ opacity: 0 }}
      >
        <div className="topic-card-icon">
          <IconComponent size={32} className="text-white" />
        </div>
        <h2 className="topic-card-title">{topic.title}</h2>
        <p className="topic-card-description">{topic.description}</p>
        <div className="topic-card-footer">
          <span className="topic-card-count">{topic.questions.length} Questions</span>
          <span className="topic-card-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}
