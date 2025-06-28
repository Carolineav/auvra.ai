import React from 'react';
import { Shield, Award, Clock, Users, CheckCircle, Zap } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'Proven Automation Frameworks',
    description: 'Battle-tested systems that deliver consistent results across industries.'
  },
  {
    icon: Award,
    title: 'Clean, Sales-Focused Design',
    description: 'Every element optimized for conversion and user experience.'
  },
  {
    icon: Clock,
    title: 'Hands-Free Delivery',
    description: 'We handle everything from setup to launch while you focus on your business.'
  },
  {
    icon: Users,
    title: 'Real Results, Real Clients',
    description: '200+ successful implementations with measurable ROI improvements.'
  }
];

const guarantees = [
  {
    icon: CheckCircle,
    title: '30-Day Money-Back Guarantee',
    description: 'Not satisfied? Get a full refund within 30 days.'
  },
  {
    icon: Zap,
    title: '99.8% Uptime Promise',
    description: 'Your automated systems work reliably around the clock.'
  }
];

const Trust = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Why Trust Auvra?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've built our reputation on delivering exceptional results and maintaining 
            the highest standards of service quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-cosmic-purple mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cosmic-purple/20 hover:border-cosmic-purple/40 transition-all duration-300 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <guarantee.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-cosmic-purple mb-4">{guarantee.title}</h3>
              <p className="text-gray-300 text-lg">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;