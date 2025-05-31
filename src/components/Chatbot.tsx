
import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Brain, Dna } from 'lucide-react';
import { GeneticAIService, ChatMessage } from '../services/geneticAI';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your advanced AI assistant for genetic analysis and disease prediction. I can help you understand gene interactions, genetic disorders, and personalized health insights. What would you like to explore today?",
      isBot: true,
      timestamp: new Date(),
      mood: 'curious',
      intent: 'education'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [aiService] = useState(new GeneticAIService());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const mood = aiService.detectMood(inputMessage);
    const intent = aiService.detectIntent(inputMessage);

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
      mood,
      intent
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Generate AI response
    setTimeout(() => {
      const response = aiService.getContextualResponse(inputMessage);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        mood,
        intent,
        multimedia: response.multimedia
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getMoodIcon = (mood?: string) => {
    switch (mood) {
      case 'academic': return '🎓';
      case 'concerned': return '💙';
      case 'curious': return '🤔';
      case 'casual': return '😊';
      default: return '🧬';
    }
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      text: "Chat cleared! I'm ready to help you with any genetic analysis questions.",
      isBot: true,
      timestamp: new Date(),
      mood: 'curious',
      intent: 'education'
    }]);
    aiService.resetContext();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center group"
        style={{ backgroundColor: '#4cd137' }}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <div className="relative">
            <Brain className="w-7 h-7 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 rounded-t-2xl text-white relative" style={{ backgroundColor: '#4cd137' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Dna className="w-7 h-7" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">GeneAI Assistant</h3>
                  <p className="text-xs opacity-90">Advanced Genetic Analysis AI</p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="text-white/80 hover:text-white text-xs px-2 py-1 rounded bg-white/20 hover:bg-white/30 transition-all"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[85%] ${message.isBot ? 'order-2' : ''}`}>
                  {message.isBot && (
                    <div className="flex items-center space-x-2 mb-1">
                      <Bot className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-gray-500">
                        AI • {getMoodIcon(message.mood)}
                      </span>
                    </div>
                  )}
                  
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                        : 'text-white shadow-sm'
                    }`}
                    style={!message.isBot ? { backgroundColor: '#4cd137' } : {}}
                  >
                    {message.text}
                    
                    {/* Multimedia content */}
                    {message.multimedia && (
                      <div className="mt-3 rounded-lg overflow-hidden">
                        <img
                          src={message.multimedia.src}
                          alt={message.multimedia.alt}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <p className="text-xs text-gray-500 mt-1">{message.multimedia.alt}</p>
                      </div>
                    )}
                  </div>
                  
                  {!message.isBot && (
                    <div className="text-xs text-gray-500 mt-1 text-right">
                      {getMoodIcon(message.mood)} {message.intent}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about genes, interactions, diseases..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm transition-all"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !inputMessage.trim()}
                className="px-4 py-3 text-white rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[50px]"
                style={{ backgroundColor: '#4cd137' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              🧬 Powered by Advanced Genetic AI • Context-Aware Responses
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
