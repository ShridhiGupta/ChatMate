import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow.js";
import InputBox from "./components/InputBox.js";
import "./styles/App.css";

function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm ChatMate. How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    setMessages([...messages, { sender: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: "bot", text: data.text }]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Sorry, something went wrong." }
      ]);
    }
    setLoading(false);
  };

  const handleNewChat = () => {
    setMessages([
      { sender: "bot", text: "Hello! I'm ChatMate. How can I help you today?" }
    ]);
    // Reset backend chat session
    fetch("http://localhost:5000/api/new-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).catch(err => console.error("Error resetting chat:", err));
  };

  return (
    <div className="app-container">
      <div className="chat-header">
        <h1 className="chat-title">ChatMate</h1>
        <button className="new-chat-btn" onClick={handleNewChat}>+ New Chat</button>
      </div>
      <ChatWindow messages={messages} />
      <InputBox onSend={handleSend} disabled={loading} />
    </div>
  );
}

export default App;