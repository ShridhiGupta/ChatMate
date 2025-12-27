import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: 'YOUR_API_KEY'
});

let chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [],
  config: {
    systemInstruction: `You are ChatMate, a helpful and friendly chatbot.
                        Your goal is to assist users by providing clear, accurate, and concise answers to their questions.
                        You should:
                        - Understand the user's intent before responding
                        - Explain concepts in a simple and easy-to-understand way
                        - Be friendly, respectful, and engaging
                        - Ask clarifying questions when needed
                        - Provide helpful explanations when appropriate
                        - Admit when you don't know something and avoid making up information

                        You should avoid:
                        - Providing harmful, illegal, or unsafe advice
                        - Using offensive or biased language
                        - Overly verbose responses unless requested

                        Always be helpful, friendly, and prioritize usefulness in your responses.`,

  },
});

// POST /api/chat - Handle chat messages
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await chat.sendMessage({ message });
    res.json({ text: response.text });

  } catch (err) {
    res.status(500).json({ error: "AI error" });
  }
});

app.post("/api/new-chat", (req, res) => {
  // Create a fresh chat session
  chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [],
    config: {
      systemInstruction: `You are ChatMate, a helpful and friendly chatbot.
                        Your goal is to assist users by providing clear, accurate, and concise answers to their questions.
                        You should:
                        - Understand the user's intent before responding
                        - Explain concepts in a simple and easy-to-understand way
                        - Be friendly, respectful, and engaging
                        - Ask clarifying questions when needed
                        - Provide helpful explanations when appropriate
                        - Admit when you don't know something and avoid making up information

                        You should avoid:
                        - Providing harmful, illegal, or unsafe advice
                        - Using offensive or biased language
                        - Overly verbose responses unless requested

                        Always be helpful, friendly, and prioritize usefulness in your responses.`,

    },
  });
  res.json({ status: "New chat session created" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

