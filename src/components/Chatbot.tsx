
import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Dna } from 'lucide-react';
import { GeneBotService, GeneMessage } from '../services/geneBot';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<GeneMessage[]>([
    {
      id: '1',
      text: "Hello! I'm your Gene Assistant. Ask me anything about genes, DNA, genetic disorders, inheritance, mutations, or genetic testing. What would you like to know about genetics?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [geneBot] = useState(new GeneBotService());
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

    // Add user message
    const userMessage: GeneMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Generate bot response
    setTimeout(() => {
      const response = geneBot.getGeneResponse(inputMessage);
      const botMessage: GeneMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      text: "Chat cleared! Ask me anything about genes, DNA, genetic disorders, or genetics in general.",
      isBot: true,
      timestamp: new Date()
    }]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <Dna className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 bg-blue-600 rounded-t-2xl text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Dna className="w-6 h-6" />
                <div>
                  <h3 className="font-bold text-lg">Gene Assistant</h3>
                  <p className="text-xs opacity-90">Ask me about genetics!</p>
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
                <div className={`max-w-[85%]`}>
                  {message.isBot && (
                    <div className="flex items-center space-x-2 mb-1">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-500">Gene Bot</span>
                    </div>
                  )}
                  
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                        : 'bg-blue-600 text-white shadow-sm'
                    }`}
                  >
                    {message.text}
                  </div>
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
                placeholder="Ask about genes, DNA, genetics..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm transition-all"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !inputMessage.trim()}
                className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[50px]"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              🧬 Specialized in Gene & Genetics Questions
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
