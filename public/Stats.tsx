import React from 'react';
import { TrendingUp, Users, Clock, Star, Brain, Cpu, Zap, Network } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Brain,
      number: '300%',
      label: 'AI-Driven ROI Increase',
      description: 'Machine learning optimization results',
      aiFeature: 'Neural network analysis'
    },
    {
      icon: Cpu,
      number: '200+',
      label: 'AI Systems Deployed',
      description: 'Across various industries',
      aiFeature: 'Automated intelligence'
    },
    {
      icon: Network,
      number: '80%',
      label: 'Process Automation',
      description: 'Tasks handled by AI agents',
      aiFeature: 'Cognitive automation'
    },
    {
      icon: Zap,
      number: '4.9/5',
      label: 'AI Performance Rating',
      description: 'Based on 150+ AI deployments',
      aiFeature: 'Continuous learning'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      {/* Animated AI Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="20" fill="none" stroke="#8b45ff" strokeWidth="2" className="animate-pulse"/>
            <circle cx="50" cy="50" r="10" fill="#8b45ff" opacity="0.5" className="animate-pulse delay-500"/>
            <circle cx="30" cy="30" r="3" fill="#8b45ff" className="animate-pulse delay-200"/>
            <circle cx="70" cy="30" r="3" fill="#8b45ff" className="animate-pulse delay-400"/>
            <circle cx="30" cy="70" r="3" fill="#8b45ff" className="animate-pulse delay-600"/>
            <circle cx="70" cy="70" r="3" fill="#8b45ff" className="animate-pulse delay-800"/>
            <line x1="30" y1="30" x2="50" y2="50" stroke="#8b45ff" strokeWidth="1" opacity="0.5"/>
            <line x1="70" y1="30" x2="50" y2="50" stroke="#8b45ff" strokeWidth="1" opacity="0.5"/>
            <line x1="30" y1="70" x2="50" y2="50" stroke="#8b45ff" strokeWidth="1" opacity="0.5"/>
            <line x1="70" y1="70" x2="50" y2="50" stroke="#8b45ff" strokeWidth="1" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-5 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 animate-float-delayed">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#00d4ff" strokeWidth="2" className="animate-pulse"/>
            <rect x="30" y="30" width="40" height="40" fill="none" stroke="#00d4ff" strokeWidth="1" className="animate-pulse delay-300"/>
            <circle cx="50" cy="50" r="8" fill="#00d4ff" opacity="0.6" className="animate-pulse delay-600"/>
            <circle cx="35" cy="35" r="2" fill="#00d4ff" className="animate-pulse delay-100"/>
            <circle cx="65" cy="35" r="2" fill="#00d4ff" className="animate-pulse delay-400"/>
            <circle cx="35" cy="65" r="2" fill="#00d4ff" className="animate-pulse delay-700"/>
            <circle cx="65" cy="65" r="2" fill="#00d4ff" className="animate-pulse delay-900"/>
          </svg>
        </div>
        
        {/* Circuit patterns */}
        <div className="absolute top-1/2 left-10 sm:left-20 w-2 h-24 sm:h-32 bg-gradient-to-b from-cosmic-purple/30 to-transparent animate-circuit"></div>
        <div className="absolute top-1/2 left-10 sm:left-20 w-24 sm:w-32 h-2 bg-gradient-to-r from-cosmic-purple/30 to-transparent animate-circuit delay-500"></div>
        <div className="absolute top-1/2 right-10 sm:right-20 w-2 h-20 sm:h-24 bg-gradient-to-b from-cosmic-blue/30 to-transparent animate-circuit delay-1000"></div>
        <div className="absolute top-1/2 right-10 sm:right-20 w-20 sm:w-24 h-2 bg-gradient-to-l from-cosmic-blue/30 to-transparent animate-circuit delay-1500"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 px-3 sm:px-4 py-2 rounded-full border border-cosmic-purple/30 mb-4 sm:mb-6">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-cosmic-purple animate-pulse" />
            <span className="text-cosmic-purple font-semibold text-sm sm:text-base">AI Performance Metrics</span>
            <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-cosmic-blue animate-pulse delay-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-cosmic-purple mb-4 sm:mb-6">Results That Speak</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Our AI automation solutions deliver measurable impact through advanced machine learning and neural network optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group relative">
              {/* Neural background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#8b45ff" strokeWidth="1" opacity="0.3"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#8b45ff" strokeWidth="1" opacity="0.2"/>
                  <circle cx="50" cy="50" r="10" fill="none" stroke="#8b45ff" strokeWidth="1" opacity="0.1"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ai-glow">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" style={{animationDelay: `${index * 200}ms`}} />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-cosmic-purple mb-2 neural-glow">{stat.number}</div>
                <div className="text-lg sm:text-xl font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400 mb-3 text-sm sm:text-base px-2">{stat.description}</div>
                
                {/* AI Feature Badge */}
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 px-2 py-1 rounded-full text-xs text-cosmic-purple border border-cosmic-purple/30">
                  <Brain className="w-3 h-3" />
                  <span className="text-xs">{stat.aiFeature}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional AI Metrics */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cosmic-purple/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Network className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-purple animate-pulse" />
                <span className="text-xl sm:text-2xl font-bold text-cosmic-purple">50+</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">AI Models Trained</p>
            </div>
            <div className="group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-blue animate-pulse delay-300" />
                <span className="text-xl sm:text-2xl font-bold text-cosmic-blue">1M+</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">Automated Decisions</p>
            </div>
            <div className="group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-cosmic-pink animate-pulse delay-600" />
                <span className="text-xl sm:text-2xl font-bold text-cosmic-pink">99.9%</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">AI Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;