
import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant for gene interaction analysis. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('gene') || input.includes('genetic')) {
      return "Gene interactions play a crucial role in disease prediction. Our AI analyzes complex genetic networks to identify potential health risks. Would you like to know more about how our algorithm works?";
    } else if (input.includes('disease') || input.includes('predict')) {
      return "Our AI system can predict disease susceptibility by analyzing gene interaction patterns. We focus on cardiovascular diseases, diabetes, and cancer predisposition. What specific condition are you interested in?";
    } else if (input.includes('how') || input.includes('work')) {
      return "Our system works in 3 steps: 1) Input your genetic data, 2) AI analyzes gene interactions, 3) Receive personalized disease risk assessment. The process is secure and takes just minutes!";
    } else if (input.includes('hello') || input.includes('hi')) {
      return "Hello! I'm here to help you understand gene interaction disease prediction. Feel free to ask about our AI technology, supported diseases, or how to get started!";
    } else {
      return "That's an interesting question! Our gene interaction AI is designed to help predict disease risks through advanced genomic analysis. Could you tell me more about what specific aspect you'd like to explore?";
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center"
        style={{ backgroundColor: '#4cd137' }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Chat Header */}
          <div className="p-4 rounded-t-2xl text-white" style={{ backgroundColor: '#4cd137' }}>
            <div className="flex items-center space-x-3">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Gene AI Assistant</h3>
                <p className="text-xs opacity-90">Ask me about gene interactions</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'text-white'
                  }`}
                  style={!message.isBot ? { backgroundColor: '#4cd137' } : {}}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about gene interactions..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
              />
              <button
                type="submit"
                className="px-3 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#4cd137' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
