import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "Within 2 weeks, Auvra helped us close 3× more leads — and spend 60% less time on follow-ups.",
      author: "Sarah Chen",
      role: "CEO, TechGear Pro",
      rating: 5,
      results: "300% increase in lead conversion"
    },
    {
      quote: "The AI system generates more qualified leads in a week than we used to get in a month.",
      author: "Michael Rodriguez",
      role: "Sales Director, Premier Properties",
      rating: 5,
      results: "$2M+ in additional revenue"
    },
    {
      quote: "Our practice runs smoother than ever. Patients love the automated system and our staff can focus on care.",
      author: "Dr. Lisa Thompson",
      role: "Practice Owner, MedCare Clinic",
      rating: 5,
      results: "90% reduction in no-shows"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cosmic-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cosmic-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="w-16 h-16 text-cosmic-purple mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-cosmic-purple mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses. See how we've transformed operations across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cosmic-purple/20 hover:border-cosmic-purple/40 transition-all duration-300">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cosmic-purple fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-700 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-cosmic-purple">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-cosmic-purple font-semibold bg-cosmic-purple/10 px-3 py-1 rounded-full inline-block">
                  {testimonial.results}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;