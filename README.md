# ChatMate - AI Chatbot

A modern, responsive chatbot built with React and powered by Google's Gemini AI. ChatMate provides helpful information and support to all users through an intuitive, beautifully designed interface.

## 🌟 Features

### Core Features
- **AI-Powered Assistance**: Leverages Google Gemini API for accurate, helpful information
- **General Support**: Answers questions on various topics and provides helpful guidance
- **Smart Responses**: Provides relevant and useful answers
- **Conversation History**: Clear chat history with message persistence during the session
- **New Chat Sessions**: Start fresh conversations without context from previous chats

### User Interface
- **Modern Chat Interface**: Clean, responsive design with message bubbles and typing indicators
- **Professional Chat Interface**: Clean, responsive design with message bubbles and typing indicators
- **Enter Key Support**: Send messages instantly by pressing Enter
- **Mobile Responsive**: Fully responsive design that works on all device sizes
- **Smooth Animations**: Beautiful transitions and floating effects

### Navigation
- **New Chat Button**: Create fresh conversations without leaving the interface
- **New Chat Button**: Create fresh conversations without leaving the interface
- **Navigation Header**: Sticky header for quick access to features

## 🛡️ Security & Privacy

- **Data Privacy**: No chat history is permanently stored
- **HIPAA Compliance Ready**: Designed with healthcare privacy standards in mind
- **Secure Communication**: All API calls use HTTPS
- **No Personal Data Retention**: Each new chat starts fresh

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Google Gemini API Key

### Installation

1. **Clone the repository**
```bash
git clone <https://github.com/ShridhiGupta/Medical-Chatbot.git>
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create or update the API key in `server.js`:
```javascript
const ai = new GoogleGenAI({
  apiKey: "YOUR_GOOGLE_GENAI_API_KEY",
});
```

### Running the Application

1. **Start the backend server** (in one terminal)
```bash
node server.js
```
The server will run on `http://localhost:5000`

2. **Start the React frontend** (in another terminal)
```bash
npm start
```
The app will open at `http://localhost:3000`

## 📁 Project Structure

```
ChatMate/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── ChatWindow.js          # Chat message display
│   │   ├── InputBox.js            # Message input field
│   │   └── MessageBubble.js       # Individual message component
│   ├── styles/
│   │   ├── App.css                # App container styles
│   │   ├── ChatWindow.css         # Chat window styles
│   │   ├── InputBox.css           # Input field styles
│   │   ├── MessageBubble.css      # Message bubble styles
│   │   └── index.css              # Global styles
│   ├── App.js                     # Main app component
│   └── index.js                   # React entry point
├── server.js                      # Backend server with API endpoints
├── package.json                   # Project dependencies
└── README.md                      # This file
```

## 🔧 API Endpoints

### `/api/chat` (POST)
Sends a message to the chatbot and receives a response.

**Request:**
```json
{
  "message": "What are the symptoms of diabetes?"
}
```

**Response:**
```json
{
  "text": "Diabetes symptoms can include..."
}
```

### `/api/new-chat` (POST)
Creates a fresh chat session, clearing all conversation history on the backend.

**Response:**
```json
{
  "status": "New chat session created"
}
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple (#667eea) to Violet (#764ba2)
- **Accent Colors**: White, Light Gray
- **Message Bubbles**: User messages in gradient purple, Bot messages in light gray

### Typography
- **Headlines**: Montserrat (Bold, 700)
- **Body Text**: Roboto (Regular, 500)
- **Font Size**: Responsive across all devices

### Animations
- **Floating Elements**: Smooth up-and-down floating motion
- **Fade-in Messages**: New messages fade in smoothly
- **Hover Effects**: Interactive buttons with transform animations
- **Slide-up Entrance**: Components animate in when first loaded

## 🎯 User Flows

### Chat Flow
1. User enters the chat interface
2. Types a message and presses Enter or clicks Send
3. Message appears as a bubble on the right
4. AI response appears as a bubble on the left
5. Can start a new chat

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: Full-width layouts with side-by-side elements
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Single-column layout with optimized touch targets

## 🧠 Chatbot Capabilities

ChatMate can:
- Answer general questions
- Provide helpful information on various topics
- Offer guidance and suggestions
- Engage in friendly conversations

### Smart Responses
The chatbot provides relevant and helpful responses for various queries.

## 🛠️ Technology Stack

- **Frontend**: React 18.0.0
- **Backend**: Express 5.1.0
- **AI**: Google Gemini API (@google/genai 1.20.0)
- **Styling**: CSS3 with Glassmorphism and Gradients
- **CORS**: Enabled for cross-origin requests
- **Type Safety**: TypeScript support

## 📦 Dependencies

```json
{
  "@google/genai": "^1.20.0",
  "cors": "^2.8.5",
  "express": "^5.1.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-scripts": "5.0.0",
  "typescript": "^4.5.0"
}
```

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

### Server Deployment

The `server.js` file can be deployed to any Node.js hosting platform:
- Heroku
- AWS
- Google Cloud
- Azure
- DigitalOcean
- Any VPS with Node.js

## 📝 Usage Examples

### Example 1: General Question
**User**: "What is the capital of France?"
**Chatbot**: Provides helpful information about Paris as the capital of France.

### Example 2: Information Request
**User**: "How do I make a cake?"
**Chatbot**: Provides a simple cake recipe or baking instructions.

### Example 3: Conversation
**User**: "Tell me a fun fact"
**Chatbot**: Shares an interesting and educational fact.

## ⚠️ Disclaimer

**Important**: ChatMate is an informational tool designed to provide helpful responses. Always verify important information and consult with professionals when needed.

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add YourFeature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a Pull Request


## 📞 Support

For issues, questions, or suggestions:
- Open an issue on the repository
- Contact (Email: guptashridhi11@gmail.com)

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Powered by Google Gemini AI
- Inspired by modern chat applications

---

**ChatMate** - Empowering users with helpful information and smart responses.

Last Updated: 2024
