import { portfolioData } from '../data/portfolioData';

export function generateChatResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  // ONLY return static responses for these EXACT matches:
  if (message === 'email') {
    return `Send me an email at ${portfolioData.personal.email}! I usually respond pretty quickly 📧`;
  }

  if (message === 'phone') {
    return `You can call or text me at ${portfolioData.personal.phone}! 📱`;
  }

  // For ALL other questions, return null so AI handles it
  return null;
}

export function getWelcomeMessage() {
  return `Hey there! 👋 I'm ${portfolioData.personal.name}. Thanks for coming! 

Instead of building a regular portfolio website, I thought it'd be more fun to build a chatbot.  Ask me literally anything - about my work experience, tools, projects, or any fun facts you'd like to know about me 😅

Feel free to give it a go. What's on your mind?`;
}