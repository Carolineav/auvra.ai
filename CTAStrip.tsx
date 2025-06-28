import React from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

const CTAStrip = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-pink relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float-delayed"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8">
          <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Let Auvra Run the Repetition —{' '}
          <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
            So You Can Run the Vision.
          </span>
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Stop wasting time on manual tasks. Start focusing on what matters most: 
          growing your business and serving your customers.
        </p>
        
        <a
          href="https://calendly.com/mskondjara/ai-booking-demo"
          className="group inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-black/50"
        >
          <Calendar className="w-6 h-6" />
          Book Your Strategy Call
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="text-white/80 mt-6 text-lg">
          Free 30-minute consultation • No commitment required
        </p>
      </div>
    </section>
  );
};

export default CTAStrip;