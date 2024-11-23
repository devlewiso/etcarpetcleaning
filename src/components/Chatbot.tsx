import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! How can I help you today? Ask about our services or book a cleaning session!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { type: 'user', text: input }]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "Thanks for your message! For immediate assistance, please call us at (555) 123-4567 or leave your contact information and we'll get back to you shortly."
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-2xl z-50">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Chat with Us</h3>
      </div>
      
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-emerald-600"
          />
          <button
            onClick={handleSend}
            className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}