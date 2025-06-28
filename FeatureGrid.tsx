import React from 'react';
import { Globe, Database, Mail, Bot, Zap, BarChart, Brain, Cpu, Network } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'AI-Powered Websites',
    description: 'Neural network-optimized landing pages that learn and adapt to convert visitors.',
    benefits: ['Machine learning optimization', 'Predictive user behavior', 'Auto A/B testing', 'Real-time personalization'],
    aiFeature: 'Smart conversion algorithms'
  },
  {
    icon: Database,
    title: 'Intelligent CRM Systems',
    description: 'AI-driven customer relationship management with predictive analytics.',
    benefits: ['Automated lead scoring', 'Behavioral pattern analysis', 'Smart workflow triggers', 'Predictive forecasting'],
    aiFeature: 'Deep learning insights'
  },
  {
    icon: Mail,
    title: 'Neural Email Automation',
    description: 'AI-crafted email sequences that adapt based on recipient behavior.',
    benefits: ['Dynamic content generation', 'Sentiment analysis', 'Optimal timing prediction', 'Response optimization'],
    aiFeature: 'Natural language processing'
  },
  {
    icon: Bot,
    title: 'Cognitive AI Agents',
    description: 'Advanced conversational AI that understands context and intent.',
    benefits: ['Multi-language support', 'Emotional intelligence', 'Learning conversations', 'Complex query handling'],
    aiFeature: 'GPT-4 powered reasoning'
  },
  {
    icon: Zap,
    title: 'Autonomous Workflows',
    description: 'Self-optimizing business processes that evolve with your operations.',
    benefits: ['Process mining', 'Bottleneck detection', 'Auto-optimization', 'Predictive maintenance'],
    aiFeature: 'Reinforcement learning'
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics',
    description: 'AI-powered insights that forecast trends and optimize performance.',
    benefits: ['Future trend prediction', 'Anomaly detection', 'Risk assessment', 'Performance forecasting'],
    aiFeature: 'Advanced machine learning'
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 animate-float">
          <Brain className="w-full h-full text-cosmic-purple" />
        </div>
        <div className="absolute bottom-10 right-10 w-48 h-48 animate-float-delayed">
          <Cpu className="w-full h-full text-cosmic-blue" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 animate-spin-slow">
          <Network className="w-full h-full text-cosmic-pink" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 px-4 py-2 rounded-full border border-cosmic-purple/30 mb-6">
            <Brain className="w-4 h-4 text-cosmic-purple animate-pulse" />
            <span className="text-cosmic-purple font-semibold">AI-Powered Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-purple mb-6">What We Offer</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Next-generation AI automation solutions that think, learn, and adapt to transform your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-cosmic-purple/20 hover:border-cosmic-purple/40 transition-all duration-300 group relative overflow-hidden">
              {/* Neural network background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id={`neural-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="#8b45ff" opacity="0.3"/>
                      <line x1="10" y1="10" x2="20" y2="10" stroke="#8b45ff" strokeWidth="0.5" opacity="0.2"/>
                      <line x1="10" y1="10" x2="10" y2="20" stroke="#8b45ff" strokeWidth="0.5" opacity="0.2"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#neural-${index})`}/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ai-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-cosmic-purple mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                
                {/* AI Feature Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 px-3 py-1 rounded-full text-sm text-cosmic-purple border border-cosmic-purple/30">
                    <Brain className="w-3 h-3" />
                    {feature.aiFeature}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cosmic-purple rounded-full animate-pulse" style={{animationDelay: `${benefitIndex * 200}ms`}}></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* AI Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-cosmic-purple mb-2">50+</div>
              <div className="text-gray-400">AI Models Deployed</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-cosmic-blue to-cosmic-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-white animate-pulse delay-200" />
              </div>
              <div className="text-3xl font-bold text-cosmic-blue mb-2">1M+</div>
              <div className="text-gray-400">Automated Decisions</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-cosmic-pink to-cosmic-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-8 h-8 text-white animate-pulse delay-400" />
              </div>
              <div className="text-3xl font-bold text-cosmic-pink mb-2">99.9%</div>
              <div className="text-gray-400">AI Accuracy Rate</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white animate-pulse delay-600" />
              </div>
              <div className="text-3xl font-bold text-cosmic-purple mb-2">24/7</div>
              <div className="text-gray-400">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;