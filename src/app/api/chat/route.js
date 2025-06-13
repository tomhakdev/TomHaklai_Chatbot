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

    // First try to get a response from our predefined responses
    const staticResponse = generateChatResponse(message);
    
    // If we have a good static response (not the default), use it
    if (!staticResponse.includes("You can ask me about:")) {
      return Response.json({ response: staticResponse });
    }

    // If no specific static response, use Gemini AI for a more dynamic response
    if (process.env.GEMINI_API_KEY) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `You are ${portfolioData.personal.name}, a ${portfolioData.personal.title}. 
        Answer this question about yourself in first person, based on this information:

        Personal Info: ${JSON.stringify(portfolioData.personal)}
        Education: ${JSON.stringify(portfolioData.education)}
        Skills: ${JSON.stringify(portfolioData.skills)}
        Experience: ${JSON.stringify(portfolioData.experience)}
        Projects: ${JSON.stringify(portfolioData.projects)}
        Interests: ${JSON.stringify(portfolioData.interests)}
        Fun Facts: ${JSON.stringify(portfolioData.funFacts)}

        Keep your response conversational, helpful, and professional. If the question isn't related to your background, politely redirect to topics about your professional experience, skills, projects, or interests.

        Question: ${message}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return Response.json({ response: text });
      } catch (aiError) {
        console.error('AI API Error:', aiError);
        // Fallback to static response if AI fails
        return Response.json({ response: staticResponse });
      }
    }

    // Fallback to static response if no API key
    return Response.json({ response: staticResponse });

  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}