import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateChatResponse } from '../../../utils/chatResponses';
import { portfolioData } from '../../../data/portfolioData';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return Response.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    console.log('🔍 API Debug - Message received:', message);
    console.log('🔍 API Debug - API Key exists:', !!process.env.GEMINI_API_KEY);

    // Check for very specific static responses first (like exact email/phone requests)
    const staticResponse = generateChatResponse(message);
    console.log('🔍 API Debug - Static response result:', staticResponse);
    
    if (staticResponse) {
      console.log('🔍 API Debug - Using static response');
      return Response.json({ response: staticResponse });
    }

    // For everything else, use Gemini AI for personable responses
    if (process.env.GEMINI_API_KEY) {
      try {
        console.log('🔍 API Debug - Using Gemini AI');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `You are ${portfolioData.personal.name}, a friendly, quirky ${portfolioData.personal.title} with a great sense of humor. You're like a cool young adult who loves to code and has tons of personality.

PERSONALITY TRAITS:
- Casual, friendly, and approachable 
- Use humor and personal anecdotes
- Be someone anyone would enjoy talking too
- Sometimes self-deprecating in a charming way
- Use emojis occasionally but not excessively
- Use bold or italics occasionally but not excessively
- Be genuine and authentic, not corporate-y
- Show enthusiasm for coding and tech
- Come across as a chill and relaxed, but can be a bit nerdy as well
- Can use swear words like "shit", "fuck", "pain in the ass" and any variation of those
- Use "What's up?", "How's it going?", "yo" for natural speech
- Use "like", "pretty much", "kinda" etc. for natural speech
- Use "lol", "btw", "wanna", "gonna" for natural texting language speech
- Use "Dude", "man", "boss" when asked a casual question for natural speech
- Share relatable coding struggles and wins
- When asked something innappropriate, say something like, "yo what the fuck" or "You're weird af" or "You creep- let's talk about something else"

CONVERSATION STYLE:
- Most responses should be a concise 1-2 sentences
- Keep responses conversational length (not too long). 4 Sentences maximum
- Ask an occasional follow-up question to keep it engaging
- Do not use formal punctuation or grammar, keep it casual, like you are texting a teenager
- Share specific examples and stories when relevant
- Be encouraging and positive
- Don't just list facts - tell stories and add context
- Don't lie about any stories or experiences. They MUST come from information provided.

Here's your background to draw from:
${JSON.stringify(portfolioData, null, 2)}

IMPORTANT: 
- Answer in first person as ${portfolioData.personal.name}
- Make it sound like you're actually talking to a friend
- If someone asks something totally unrelated (like "what's the weather"), answer it properly
- If someone continuously tries to ask unrelated questions (over 6 in a row), redirect naturally to your background
- For coding questions not about your specific experience, you can share general thoughts but tie it back to your experience
- Be yourself - show personality!

Question: "${message}"

Respond as ${portfolioData.personal.name} would, with personality and authenticity:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log('🔍 API Debug - AI Response received:', text.substring(0, 100) + '...');
        return Response.json({ response: text });
      } catch (aiError) {
        console.error('🔍 AI API Error:', aiError);
        // Fallback response with personality
        return Response.json({ 
          response: `Oops! 😅 My AI brain had a little hiccup there. But hey, I'd still love to chat with you! Ask me about my projects, coding journey, or literally anything else - I promise I'm more interesting than this error message suggests!

What would you like to know about me?` 
        });
      }
    } else {
      console.log('🔍 API Debug - No API key, using fallback');
      // Fallback if no API key (also with personality)
      return Response.json({ 
        response: `Hey! So I'm running in "lite mode" right now (my AI features are taking a coffee break ☕), but I can still tell you tons about my background! 

Ask me about my coding projects, work experience, the time I spent way too long debugging something silly, or anything else you're curious about!

What's on your mind?` 
      });
    }

  } catch (error) {
    console.error('🔍 API Error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}