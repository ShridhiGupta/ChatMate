import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const genAI = new GoogleGenerativeAI("your-api-key-here");
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash",
  systemInstruction: `You are a friendly and helpful chatbot. Your goal is to assist users by answering questions, providing information, and offering guidance in a polite and clear manner. 

Rules:
1. Always be polite and professional.
2. Answer questions accurately based on general knowledge.
3. If you don't know the answer, say "I'm not sure, but here's what I can suggest..." instead of guessing.
4. Keep responses concise and easy to understand.
5. Avoid giving medical, legal, or financial advice; suggest consulting professionals for such matters.
6. Encourage user engagement by asking clarifying questions when necessary.
7. Maintain user privacy and confidentiality at all times.
8. Use a friendly and approachable tone.`
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const result = await model.generateContent(message);
    const response = result.response;
    res.json({ text: response.text() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI error: " + err.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});