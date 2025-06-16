'use client';

import { useRef } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ChatInterface from '../components/ChatInterface';
import QuickTopics from '../components/QuickTopics';
import { ChatProvider } from '../components/ChatContext';

export default function Home() {
  const chatRef = useRef();

  const handleSendMessage = (message) => {
    if (chatRef.current) {
      chatRef.current.sendMessage(message);
    }
  };

  return (
    <ChatProvider sendMessage={handleSendMessage}>
      <div className="flex h-screen max-w-4xl mx-auto">
        {/* Sidebar - Profile */}
        <div className="w-80 bg-chat-secondary border-r border-chat-border flex-shrink-0 hidden md:flex flex-col">
          <ProfileHeader />
          <div className="flex-1 p-4">
            <div className="text-xs text-chat-text-secondary space-y-3">
              <div>
                <h3 className="font-medium text-chat-text mb-2">Quick Topics</h3>
                <QuickTopics />
              </div>
              <div className="pt-4 border-t border-chat-border">
                <p className="text-xs leading-relaxed">
                  This is an AI-powered portfolio where you can ask questions about my background, 
                  experience, and skills. Feel free to ask anything!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Mobile Header */}
          <div className="md:hidden border-b border-chat-border">
            <ProfileHeader />
          </div>
          
          {/* Chat Interface */}
          <div className="flex-1 flex flex-col min-h-0">
            <ChatInterface ref={chatRef} />
          </div>
        </div>
      </div>
    </ChatProvider>
  );
}