'use client';

import { useContext } from 'react';
import { ChatContext } from './ChatContext';

const quickTopics = [
  {
    emoji: "💼",
    label: "Work Experience",
    query: "Tell me about your work experience and internships in detail"
  },
  {
    emoji: "🛠️", 
    label: "Technical Skills",
    query: "What are your technical skills and what technologies do you work with?"
  },
  {
    emoji: "🚀",
    label: "Projects", 
    query: "Show me your projects and tell me about what you've built"
  },
  {
    emoji: "🎓",
    label: "Education",
    query: "Tell me about your education at Queen's University"
  },
  {
    emoji: "🎯",
    label: "Interests & Hobbies",
    query: "What do you do for fun? What are your hobbies and interests?"
  },
  {
    emoji: "📞",
    label: "Contact Info",
    query: "How can I get in touch with you?"
  },
  {
    emoji: "🎮",
    label: "Favorites & Fun Facts", 
    query: "Tell me some fun facts about yourself and your favorite things"
  },
  {
    emoji: "✈️",
    label: "Travel & Experiences",
    query: "Where have you traveled and what interesting experiences have you had?"
  }
];

export default function QuickTopics() {
  const { sendMessage } = useContext(ChatContext);

  const handleTopicClick = (query) => {
    sendMessage(query);
  };

  return (
    <div className="space-y-1">
      {quickTopics.map((topic, index) => (
        <div
          key={index}
          onClick={() => handleTopicClick(topic.query)}
          className="p-2 rounded bg-chat-hover cursor-pointer hover:bg-chat-border transition-colors text-xs flex items-center gap-2"
        >
          <span>{topic.emoji}</span>
          <span>{topic.label}</span>
        </div>
      ))}
    </div>
  );
}