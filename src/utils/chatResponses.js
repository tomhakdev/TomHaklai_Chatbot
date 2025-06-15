import { portfolioData } from '../data/portfolioData';

export function generateChatResponse(userMessage) {
  const message = userMessage.toLowerCase().trim();
  
  // ONLY return static responses for these EXACT matches:
  if (message === 'email') {
    return `Shoot me an email at ${portfolioData.personal.email}! I usually respond pretty quickly 📧`;
  }

  if (message === 'phone') {
    return `You can call or text me at ${portfolioData.personal.phone}! 📱`;
  }

  // For ALL other questions, return null so AI handles it
  return null;
}

export function getWelcomeMessage() {
  return `Hey there! 👋 I'm ${portfolioData.personal.name}, and honestly, I'm pretty excited you're here! 

I built this little chat thing because, let's be real, regular resumes are kinda boring, right? Ask me literally anything - about my code adventures, that time I spent 6 hours debugging a missing semicolon, my weird coffee obsession, or how I somehow convinced companies to let me intern with them 😅

Seriously though, I love talking about tech, projects, and pretty much anything else. What's on your mind?`;
}