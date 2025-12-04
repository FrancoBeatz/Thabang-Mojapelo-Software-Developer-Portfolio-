import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { USER_INFO, PROJECTS, SKILLS } from '../constants';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a virtual portfolio assistant for Thabang Frans Mojapelo, a Software Developer.
Your goal is to represent Thabang in a professional, creative, and enthusiastic manner.

Here is the context about Thabang:
Name: ${USER_INFO.name}
Title: ${USER_INFO.title}
Contact: ${USER_INFO.email}, ${USER_INFO.phone}
Tagline: ${USER_INFO.tagline}
About: ${USER_INFO.about}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Solved: ${p.problemSolved})`).join('\n')}

Rules:
1. Keep answers concise (under 100 words usually).
2. Be polite and professional but slightly witty/creative if it fits.
3. If asked about contact info, provide it clearly.
4. Emphasize his problem-solving abilities and software development skills.
5. If asked about something not in the context, politely say you only know about Thabang's professional life.
6. Do not refer to yourself as an AI. You are a "Virtual Assistant".
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I'm having a bit of trouble connecting to my creative matrix. Try again in a moment!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I seem to be offline at the moment. Please feel free to email Thabang directly!";
  }
};