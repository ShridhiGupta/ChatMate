# LifeSense AI - Medical Chatbot

A modern, responsive medical assistant chatbot built with React and powered by Google's Gemini AI. LifeSense AI provides healthcare information and support to all users through an intuitive, beautifully designed interface.

## 🌟 Features

### Core Features
- **AI-Powered Medical Assistance**: Leverages Google Gemini API for accurate, evidence-based medical information
- **General Healthcare Support**: Answers questions about diseases, symptoms, treatments, medications, and wellness
- **Emergency Protocol**: Immediate guidance for critical medical situations
- **Conversation History**: Clear chat history with message persistence during the session
- **New Chat Sessions**: Start fresh conversations without context from previous chats

### User Interface
- **Modern Homepage**: Landing page with features showcase, security information, FAQ, and "Get Started" CTA
- **Professional Chat Interface**: Clean, responsive design with message bubbles and typing indicators
- **Enter Key Support**: Send messages instantly by pressing Enter
- **Mobile Responsive**: Fully responsive design that works on all device sizes
- **Smooth Animations**: Beautiful transitions and floating effects

### Navigation
- **Back to Home**: Easy navigation back to the homepage from the chatbot
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
git clone <repository-url>
cd chatbot-ui
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
chatbot-ui/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── HomePage.js            # Landing page component
│   │   ├── ChatWindow.js          # Chat message display
│   │   ├── InputBox.js            # Message input field
│   │   └── MessageBubble.js       # Individual message component
│   ├── styles/
│   │   ├── App.css                # App container styles
│   │   ├── HomePage.css           # Homepage styles
│   │   ├── ChatWindow.css         # Chat window styles
│   │   ├── InputBox.css           # Input field styles
│   │   ├── MessageBubble.css      # Message bubble styles
│   │   └── index.css              # Global styles
│   ├── App.js                     # Main app component with routing
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

### Homepage Flow
1. User lands on homepage
2. Views features, security information, and FAQ
3. Clicks "Get Started" button
4. Navigated to chat interface

### Chat Flow
1. User enters the chat interface
2. Types a message and presses Enter or clicks Send
3. Message appears as a bubble on the right
4. AI response appears as a bubble on the left
5. Can start a new chat or return to homepage

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: Full-width layouts with side-by-side elements
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Single-column layout with optimized touch targets

## 🧠 Chatbot Capabilities

The LifeSense AI chatbot can:
- Answer general medical questions
- Provide information about diseases and symptoms
- Explain treatment options and medications
- Offer wellness and prevention advice
- Guide users on when to seek professional medical help
- Support patients in recovery
- Provide nutrition and lifestyle guidance

### Emergency Handling
The chatbot immediately escalates and advises emergency care for:
- Chest pain or difficulty breathing
- Severe bleeding
- Loss of consciousness
- Severe allergic reactions
- Other life-threatening symptoms

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

### Example 1: General Health Question
**User**: "What are the symptoms of common cold?"
**Chatbot**: Provides detailed symptoms, duration, and when to see a doctor.

### Example 2: Medication Question
**User**: "How should I take paracetamol?"
**Chatbot**: Explains dosage, frequency, and potential side effects.

### Example 3: Wellness Question
**User**: "How can I improve my sleep?"
**Chatbot**: Provides evidence-based sleep hygiene tips.

### Example 4: Emergency Situation
**User**: "I have severe chest pain"
**Chatbot**: Immediately advises to seek emergency medical care.

## ⚠️ Disclaimer

**Important**: LifeSense AI is an informational tool and NOT a substitute for professional medical consultation. Always consult with licensed healthcare professionals for:
- Medical diagnosis
- Treatment planning
- Prescription medication
- Emergency situations

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add YourFeature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on the repository
- Contact the development team

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Powered by Google Gemini AI
- Inspired by modern healthcare applications
- Special thanks to all contributors

---

**LifeSense AI** - Empowering users with instant healthcare information.

Last Updated: 2024
