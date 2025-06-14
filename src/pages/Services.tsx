import React from 'react';
import { Globe, Database, Mail, Bot, Zap, Settings, BarChart, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'AI-Powered Websites',
      description: 'High-converting landing pages and full websites built with AI optimization.',
      features: ['Conversion-optimized design', 'AI content generation', 'Performance optimization', 'Mobile-first approach'],
      price: 'From $999'
    },
    {
      icon: Database,
      title: 'CRM Integration & Automation',
      description: 'Seamless integration with your existing systems and automated workflows.',
      features: ['Multi-platform integration', 'Custom workflow design', 'Data synchronization', 'Real-time reporting'],
      price: 'From $1,500'
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Intelligent email sequences that nurture leads and drive conversions.',
      features: ['Personalized sequences', 'Behavioral triggers', 'A/B testing', 'Performance analytics'],
      price: 'From $800'
    },
    {
      icon: Bot,
      title: 'Custom AI Agents',
      description: 'Intelligent chatbots and virtual assistants for sales and support.',
      features: ['Natural language processing', 'Lead qualification', '24/7 availability', 'Multi-channel support'],
      price: 'From $2,000'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'End-to-end automation of your business processes and workflows.',
      features: ['Workflow mapping', 'Task automation', 'Integration setup', 'Monitoring & optimization'],
      price: 'From $1,200'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive dashboards and automated reporting systems.',
      features: ['Custom dashboards', 'Automated reports', 'KPI tracking', 'Predictive analytics'],
      price: 'From $600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We analyze your current processes and identify automation opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom automation strategy tailored to your business goals and requirements.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds and integrates your automation systems with precision.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing followed by smooth deployment and team training.'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Ongoing monitoring and optimization to maximize performance and ROI.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cosmic-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cosmic-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-pink bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI automation solutions designed to transform your business operations 
            and accelerate growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-cosmic-purple/20 hover:border-cosmic-purple/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-cosmic-purple mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cosmic-purple rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-cosmic-purple">{service.price}</span>
                  <button className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-4 py-2 rounded-lg font-semibold hover:from-cosmic-blue hover:to-cosmic-pink transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful automation implementation 
              and maximum ROI for your business.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex items-start gap-8 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cosmic-purple mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our automation solutions can transform your business.
          </p>
          <a
            href="https://calendly.com/auvra/strategy"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cosmic-blue hover:to-cosmic-pink transition-all duration-300 transform hover:scale-105"
          >
            <Settings className="w-5 h-5" />
            Book Strategy Call
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;