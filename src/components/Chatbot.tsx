import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hi! I'm AuvraBot. I can help you learn about our AI automation services, pricing, or schedule a strategy call. What would you like to know?",
    isBot: true,
    timestamp: new Date()
  }
];

const botResponses = {
  pricing: "Our pricing starts at $999 for the Starter package (AI landing page + CRM setup), $2,500 for Pro (full website + automation), and custom builds from $5,000. Would you like me to help you book a strategy call to discuss which plan fits your needs?",
  services: "We specialize in 4 key areas: 1) AI-powered websites that convert, 2) CRM integrations (Notion, Airtable, Pipedrive), 3) Automated email outreach sequences, and 4) Custom AI agents for lead qualification. Which area interests you most?",
  timeline: "Delivery times vary by package: Starter (5-7 days), Pro (10-14 days), and Elite Custom builds are scoped individually. We prioritize quality while maintaining fast turnaround times.",
  booking: "I'd love to connect you with our team! You can book a free strategy call at https://calendly.com/auvra/strategy - it's the best way to discuss your specific automation needs.",
  about: "Auvra.tech was founded in 2023 to help businesses automate their operations with AI. We've successfully automated 200+ businesses across various industries, helping them save time and increase revenue through intelligent automation.",
  default: "That's a great question! For detailed information about your specific needs, I'd recommend booking a free strategy call with our team. They can provide personalized recommendations. Would you like me to help you schedule that?"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return botResponses.pricing;
    } else if (message.includes('service') || message.includes('what do you do') || message.includes('help')) {
      return botResponses.services;
    } else if (message.includes('time') || message.includes('delivery') || message.includes('how long')) {
      return botResponses.timeline;
    } else if (message.includes('call') || message.includes('meeting') || message.includes('book') || message.includes('schedule')) {
      return botResponses.booking;
    } else if (message.includes('about') || message.includes('company') || message.includes('who are you')) {
      return botResponses.about;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 bg-gradient-to-r from-cosmic-purple to-cosmic-blue p-4 rounded-2xl text-white text-sm shadow-2xl cursor-pointer hover:from-cosmic-blue hover:to-cosmic-pink transition-all duration-300 transform hover:scale-105 max-w-xs border border-cosmic-purple/30"
           onClick={() => setIsOpen(true)}>
        <div className="flex items-center gap-3">
          <Bot className="w-6 h-6" />
          <div>
            <div className="font-bold">Need help?</div>
            <div className="text-white/80">Ask AuvraBot anything!</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-cosmic-purple/30 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold">AuvraBot</h3>
              <p className="text-xs text-white/80">AI Assistant • Online now</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-gray-900 to-black">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            {message.isBot && (
              <div className="w-8 h-8 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.isBot
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700 text-gray-100'
                  : 'bg-gradient-to-br from-cosmic-purple to-cosmic-blue text-white'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>

            {!message.isBot && (
              <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-cosmic-purple rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cosmic-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-cosmic-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-cosmic-purple/20 bg-gradient-to-r from-gray-900 to-black">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about our services..."
            className="flex-1 p-3 bg-gray-800 border border-cosmic-purple/30 rounded-full focus:outline-none focus:ring-2 focus:ring-cosmic-purple text-white placeholder-gray-400"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="w-12 h-12 bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:from-cosmic-blue hover:to-cosmic-pink disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all duration-300"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;