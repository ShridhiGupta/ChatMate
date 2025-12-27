import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble.js";
import "./../styles/ChatWindow.css";

function ChatWindow({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;