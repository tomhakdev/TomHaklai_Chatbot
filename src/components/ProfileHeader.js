import { portfolioData } from '../data/portfolioData';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center py-8 px-4 border-b border-chat-border">
      <div className="relative mb-4">
        <img
          src="/profile.jpg"
          alt={portfolioData.personal.name}
          className="w-16 h-16 rounded-full object-cover profile-image"
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-chat-bg"></div>
      </div>
      
      <h1 className="text-xl font-semibold text-chat-text mb-1">
        {portfolioData.personal.name}
      </h1>
      
      <p className="text-chat-text-secondary text-sm mb-2">
        {portfolioData.personal.title}
      </p>
      
      <p className="text-chat-text-secondary text-xs">
        📍 {portfolioData.personal.location}
      </p>
      
      <div className="mt-4 text-xs text-center text-chat-text-secondary max-w-sm">
        <p>Ask me anything about my background, experience, projects, or skills!</p>
      </div>
    </div>
  );
}