import React from 'react';
import { Mail, Calendar, ArrowRight, Sparkles, Cpu, Brain, Zap } from 'lucide-react';

const Hero = () => {
  const handleEmailClick = () => {
    window.open('mailto:contact@auvra.tech?subject=Inquiry about Auvra Services', '_blank');
  };

  const handleCallClick = () => {
    window.open('https://calendly.com/mskondjara/ai-booking-demo', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-gradient">
      {/* Cosmic Background with Floating Particles */}
      <div className="absolute inset-0 cosmic-particles">
        {/* Floating cosmic particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-purple rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Larger glowing orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-2 h-2 bg-cosmic-blue rounded-full animate-particle-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      
      {/* Main AI Brain - Inspired by your reference */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
          <div className="relative w-full h-full">
            {/* Brain Structure with Cosmic Colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/40 to-cosmic-blue/40 rounded-full blur-2xl animate-brain-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-cosmic-pink/30 to-cosmic-purple/30 rounded-full blur-xl animate-brain-pulse delay-500"></div>
            
            {/* Neural Network Connections */}
            <svg className="absolute inset-0 w-full h-full animate-slow-spin" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b45ff" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#ff006e" stopOpacity="0.4"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Main neural pathways */}
              <path d="M50,50 Q100,25 150,50 Q175,100 150,150 Q100,175 50,150 Q25,100 50,50" 
                    fill="none" stroke="url(#neuralGradient)" strokeWidth="2" opacity="0.8" filter="url(#glow)" className="animate-neural-flow"/>
              <path d="M75,75 Q100,50 125,75 Q150,100 125,125 Q100,150 75,125 Q50,100 75,75" 
                    fill="none" stroke="url(#neuralGradient)" strokeWidth="1.5" opacity="0.6" filter="url(#glow)" className="animate-neural-flow delay-1000"/>
              
              {/* Neural nodes with cosmic glow */}
              <circle cx="50" cy="50" r="4" fill="#8b45ff" opacity="0.9" className="animate-pulse" filter="url(#glow)"/>
              <circle cx="150" cy="50" r="4" fill="#00d4ff" opacity="0.9" className="animate-pulse delay-200" filter="url(#glow)"/>
              <circle cx="150" cy="150" r="4" fill="#ff006e" opacity="0.9" className="animate-pulse delay-400" filter="url(#glow)"/>
              <circle cx="50" cy="150" r="4" fill="#8b45ff" opacity="0.9" className="animate-pulse delay-600" filter="url(#glow)"/>
              <circle cx="100" cy="100" r="6" fill="#00d4ff" opacity="1" className="animate-pulse delay-300" filter="url(#glow)"/>
              
              {/* Additional neural nodes */}
              <circle cx="75" cy="75" r="3" fill="#ff006e" opacity="0.8" className="animate-pulse delay-100" filter="url(#glow)"/>
              <circle cx="125" cy="75" r="3" fill="#8b45ff" opacity="0.8" className="animate-pulse delay-500" filter="url(#glow)"/>
              <circle cx="125" cy="125" r="3" fill="#00d4ff" opacity="0.8" className="animate-pulse delay-700" filter="url(#glow)"/>
              <circle cx="75" cy="125" r="3" fill="#ff006e" opacity="0.8" className="animate-pulse delay-900" filter="url(#glow)"/>
            </svg>
            
            {/* Central Brain Icon with Cosmic Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-full flex items-center justify-center animate-brain-pulse brain-glow">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Floating Tech Elements */}
        <div className="absolute top-20 left-10 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 animate-cosmic-drift">
          <div className="w-full h-full bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20 rounded-lg rotate-45 flex items-center justify-center cosmic-glow">
            <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-cosmic-blue rotate-45" />
          </div>
        </div>
        
        <div className="absolute bottom-20 right-10 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 animate-float-delayed">
          <div className="w-full h-full bg-gradient-to-br from-cosmic-pink/20 to-cosmic-purple/20 rounded-full flex items-center justify-center cosmic-glow">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-pink animate-pulse" />
          </div>
        </div>
        
        {/* Floating Cosmic Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-gradient-to-r from-cosmic-blue/20 to-cosmic-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Circuit-like Tech Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 border border-cosmic-purple rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 border border-cosmic-blue rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-5 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rotate-45 animate-bounce"></div>
        
        {/* Neural circuit patterns */}
        <div className="absolute top-40 right-20 sm:right-40 w-2 h-16 sm:h-20 bg-cosmic-purple/50 animate-pulse"></div>
        <div className="absolute top-40 right-20 sm:right-40 w-16 sm:w-20 h-2 bg-cosmic-purple/50 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 left-20 sm:left-40 w-2 h-12 sm:h-16 bg-cosmic-blue/50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 sm:left-40 w-12 sm:w-16 h-2 bg-cosmic-blue/50 animate-pulse delay-1500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 px-3 sm:px-4 py-2 rounded-full border border-cosmic-purple/30 mb-4 sm:mb-6 cosmic-glow">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cosmic-blue animate-pulse" />
            <span className="text-cosmic-blue font-semibold text-sm sm:text-base">AI-Powered Business Automation</span>
            <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-cosmic-purple animate-pulse delay-500" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Build Smarter.
          </span>
          <br />
          <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-pink bg-clip-text text-transparent">
            Automate Faster.
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Sell 24/7.
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-2">
          Based in Windhoek, Namibia, serving clients globally. We help growth-focused brands automate operations using AI websites, 
          CRM systems, email outreach, and intelligent agents — all without the tech overwhelm.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <button
            onClick={handleCallClick}
            className="group bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-cosmic-blue hover:to-cosmic-pink transition-all duration-300 transform hover:scale-105 flex items-center gap-2 sm:gap-3 cosmic-glow w-full sm:w-auto justify-center"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="whitespace-nowrap">Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={handleEmailClick}
            className="group bg-transparent border-2 border-cosmic-purple text-cosmic-purple px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-cosmic-purple hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Email Us
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cosmic-purple/30">
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Trusted by 200+ businesses worldwide • Based in Windhoek, Namibia</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-purple" />
              <div className="text-xl sm:text-2xl font-bold">200+</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-cosmic-purple/30"></div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-blue" />
              <div className="text-xl sm:text-2xl font-bold">99.8%</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-cosmic-purple/30"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-pink" />
              <div className="text-xl sm:text-2xl font-bold">24/7</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 mt-2">
            <div>AI Projects Delivered</div>
            <div>System Uptime</div>
            <div>Automation Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cosmic-purple rounded-full flex justify-center cosmic-glow">
          <div className="w-1 h-2 sm:h-3 bg-cosmic-purple rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;