import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Plus, Users, Clock, Trash } from 'lucide-react';
import RiskDisplay from './RiskDisplay';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      content: "Hello! I'm your healthcare assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = {
      content: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage = {
          content: data.bot_response,
          sender: 'bot',
          timestamp: new Date(),
          analysis: {
            risk_score: data.risk_score,
            risk_label: data.risk_label,
            risk_percentage: data.risk_percentage,
            symptoms: data.symptoms,
            possible_conditions: data.possible_conditions
          }
        };

        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        content: "I apologize, but I'm having trouble processing your message. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#E8FFF5]">
      <div className="w-64 p-4 flex flex-col gap-4">
        <button className="w-full bg-emerald-500 text-white p-3 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-all">
          <Plus className="w-5 h-5" />
          New Chat
        </button>

        <button className="w-full bg-teal-800 text-white p-3 rounded-lg flex items-center gap-2">
          <Users className="w-5 h-5" />
          Patient Dashboard
        </button>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-700 font-medium">Chat History</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <Trash className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg cursor-pointer">
                <Clock className="w-4 h-4" />
                <div className="flex flex-col">
                  <span className="text-sm truncate">{msg.content.substring(0, 30)}...</span>
                  <span className="text-xs text-gray-400">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white/50 rounded-l-3xl">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl text-teal-800 font-semibold">Healthcare Assistant</h1>
          <div className="mt-4 flex items-center gap-2 text-teal-800">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Chat Session</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-blue-50 text-gray-800'
                }`}
              >
                <div>{msg.content}</div>
                {msg.analysis && <RiskDisplay analysis={msg.analysis} />}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-4 rounded-2xl bg-blue-50 text-gray-800">
                Analyzing your symptoms...
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input 
              type="text" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Type your symptoms..." 
              className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className={`bg-emerald-500 text-white p-3 rounded-lg hover:bg-emerald-600 transition-colors ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;