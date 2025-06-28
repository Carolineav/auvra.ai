import React from 'react';
import { Users, Target, Lightbulb, Award, MapPin, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Cutting-edge AI solutions that keep you ahead of the competition.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work as an extension of your team, not just another vendor.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Premium quality in every project, from concept to delivery.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cosmic-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cosmic-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-pink bg-clip-text text-transparent">
              About Auvra
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            We're not just another tech agency. We're automation architects who transform 
            ambitious businesses into self-running revenue machines.
          </p>
          <div className="flex items-center justify-center gap-2 text-cosmic-purple">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-semibold">Based in Windhoek, Namibia</span>
            <Globe className="w-5 h-5 ml-4" />
            <span className="text-lg font-semibold">Serving clients globally</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-cosmic-purple mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded in 2023 and based in Windhoek, Namibia, Auvra emerged from a simple observation: most businesses 
                  were drowning in repetitive tasks while missing massive growth opportunities.
                </p>
                <p>
                  Our founders, seasoned entrepreneurs and AI specialists, had built and sold 
                  multiple companies. They knew the pain of manual processes and the power 
                  of intelligent automation.
                </p>
                <p>
                  Today, we've helped over 200+ businesses across the globe automate their operations, 
                  generating millions in additional revenue while freeing up thousands 
                  of hours for strategic work.
                </p>
                <div className="bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 p-4 rounded-lg border border-cosmic-purple/30">
                  <p className="text-cosmic-purple font-semibold">
                    🌍 Global Reach: While based in Namibia, we serve clients across Africa, Europe, North America, and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20 rounded-3xl p-8 backdrop-blur-sm border border-cosmic-purple/30">
                <div className="w-full h-full bg-gradient-to-br from-black/50 to-gray-900/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-cosmic-purple mb-4">200+</div>
                    <div className="text-xl text-gray-300 mb-4">Businesses Automated</div>
                    <div className="flex items-center justify-center gap-2 text-cosmic-blue">
                      <Globe className="w-5 h-5" />
                      <span className="text-sm">Worldwide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cosmic-purple mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Meet the Team</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A diverse group of AI specialists, automation experts, and business strategists 
            united by one mission: making your business unstoppable.
          </p>
          <div className="bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 p-6 rounded-lg border border-cosmic-purple/30 mb-16">
            <p className="text-cosmic-purple font-semibold text-lg">
              📍 Headquartered in Windhoek, Namibia with team members and partners worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Chen', role: 'CEO & AI Strategist', expertise: 'Machine Learning, Business Strategy', location: 'Windhoek, Namibia' },
              { name: 'Sarah Johnson', role: 'CTO & Automation Lead', expertise: 'Systems Integration, Process Design', location: 'Remote, Global' },
              { name: 'Marcus Rodriguez', role: 'Head of Client Success', expertise: 'CRM Systems, Sales Automation', location: 'Remote, Global' }
            ].map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cosmic-purple/20 hover:border-cosmic-purple/40 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-cosmic-purple mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-cosmic-blue">
                  <MapPin className="w-3 h-3" />
                  <span>{member.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-cosmic-purple mb-8">Global Reach, Local Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-6">Why Namibia?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Namibia offers a unique advantage in the global tech landscape - a stable, 
                  English-speaking environment with strong digital infrastructure and competitive costs.
                </p>
                <p>
                  Our Windhoek base allows us to serve clients across multiple time zones effectively, 
                  from African markets to European and American businesses.
                </p>
                <p>
                  We combine local innovation with global standards, delivering world-class 
                  automation solutions at exceptional value.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20 p-8 rounded-2xl border border-cosmic-purple/30">
              <h3 className="text-2xl font-bold text-cosmic-purple mb-6">Our Global Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cosmic-blue mb-2">50+</div>
                  <div className="text-sm text-gray-300">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cosmic-pink mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Global Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cosmic-purple mb-2">6</div>
                  <div className="text-sm text-gray-300">Continents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cosmic-blue mb-2">15+</div>
                  <div className="text-sm text-gray-300">Time Zones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;